import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./redux/slice/authSlice.js";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import {onError} from '@apollo/client/link/error';
import './index.css';
import App from './App';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['apollo/MUTATE', 'apollo/QUERY'],
      },
    })
});

export const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReduxProvider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ReduxProvider>
);

