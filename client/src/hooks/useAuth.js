import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQuery } from '@apollo/client';

import {
    loginStart, 
    loginSuccess, 
    loginFailure, 
    logoutExecution,
    // updateUser, 
    selectUser, 
    selectIsAuthenticated, 
    selectAuthLoading, 
    selectAuthError } from "../redux/slice/authSlice.js";
import { GET_ME_QUERY, LOGIN_MUTATION, LOGOUT_MUTATION } from '../graphql/Mutations.js';

export const useAuth = () => {
    console.log("starting useAuth");
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const loading = useSelector(selectAuthLoading);
    const error = useSelector(selectAuthError);

    const [loginMutation] = useMutation(LOGIN_MUTATION);
    const [logoutMutation] = useMutation(LOGOUT_MUTATION);
    // const [getMeQuery] = useMutation(GET_ME_QUERY);
    const { refetch: refetchUser } = useQuery(GET_ME_QUERY, {
        skip: !isAuthenticated,
        onCompleted: (data) => {
            console.log("Refetching - useAuth")
          if (data?.me) {
            dispatch(loginSuccess(data.me));
          }
        }
    });

    const Login = async(credentials) => {
        dispatch(loginStart());
        try {
            console.log("Logging in - useAuth");
            const {data} = await loginMutation({
                variables: credentials,
                context: {
                    credentials: 'include'
                }
            });

            if(data?.login?.user) {
                dispatch(loginSuccess(data.login.user));
                return true;
            }
            throw new Error("Login Failed");
        } 
        catch(error) {    
            dispatch(loginFailure(error.message));
            return false;
        }
    }

    const Logout = async() => {
        try {
            console.log("Logout- useAuth")
            await logoutMutation({
                context: {
                    credentials: 'include'
                }
            });
            dispatch(logoutExecution());
            return true;
        }
        catch(error) {
            console.log("Logout failed: ", error);
            return false;
        }
    }

    const checkAuth = async () => {
        console.log('Checking auth...'); // Starting point
        try {
          const { data } = await refetchUser();
          console.log('Auth check response:', data); // What's coming back?
          return !!data?.me;
        } catch (error) {
          console.log('Auth check error:', error); // What went wrong?
          return false;
        }
    };

    return {
        user,
        isAuthenticated,
        loading,
        error,
        Login,
        Logout,
        checkAuth,
        refetchUser
    };
};