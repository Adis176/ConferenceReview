import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import routeConfig from './routeConfig';
import Loading from "./Loading/Loading";

const ProtectedRouteWrapper = ({ children }) => {
  const { isAuthenticated, loading, checkAuth } = useAuth();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, []);
  if (loading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export const Router = () => {
  const renderRoutes = (routes, isProtected = false) => {
    return routes.map(route => {
      const RouteComponent = route.component;

      if (route.children) {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              isProtected ? (
                <ProtectedRouteWrapper>
                  <RouteComponent />
                </ProtectedRouteWrapper>
              ) : (
                <RouteComponent />
              )
            }
          >
            {renderRoutes(route.children, isProtected)}
          </Route>
        );
      }

      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            isProtected ? (
              <ProtectedRouteWrapper>
                <RouteComponent />
              </ProtectedRouteWrapper>
            ) : (
              <RouteComponent />
            )
          }
        />
      );
    });
  };

  return (
    <Routes>
      {renderRoutes(routeConfig.public)}
      {renderRoutes(routeConfig.protected, true)}
      {/* Catch all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};