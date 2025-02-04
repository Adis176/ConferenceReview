// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    user: null,
    authenticated: false,
    error: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.authenticated = true;
            state.user = action.payload;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logoutExecution: (state) => {
            state.loading = false;
            state.authenticated = false;
            state.user = null;
            state.error = null;
        },
        updateUser: (state, action) => {
            state.user = {...state.user, ...action.payload};
        }
    }
});

export const { 
    loginStart, 
    loginSuccess, 
    loginFailure, 
    logoutExecution,
    updateUser 
} = authSlice.actions;
  
export default authSlice.reducer;

export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;