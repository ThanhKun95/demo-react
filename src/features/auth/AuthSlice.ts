import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Auth, DataAuthRegisReturn } from '../../models';

interface Initial {
    dataAuth: Auth;
    dataInput: Auth;
    isLoadingSuccess: boolean;

    isLoggedIn: boolean;
    logging: boolean;
}

const initialState: Initial = {
    dataAuth: {} as Auth,
    dataInput: {} as Auth,
    isLoadingSuccess: false,

    isLoggedIn: false,
    logging: false,
};

const authSlice = createSlice({
    name: 'AUTH',
    initialState,
    reducers: {
        GET_AUTH: (state, action: PayloadAction<Auth>) => {
            state.logging = true;
        },
        GET_AUTH_SUCCESS: (state, action: PayloadAction<DataAuthRegisReturn>) => {
            state.logging = false;
            state.isLoadingSuccess = true;
        },
        GET_AUTH_FAILED: (state) => {
            state.logging = false;
            state.isLoadingSuccess = false;
        },
        HANDLE_DATA_INPUT: (state, action: PayloadAction<Auth>) => {
            state.dataInput = action.payload;
        },
        IS_LOGGED_IN: (state) => {
            state.isLoggedIn = false;
        },
        LOG_OUT: (state) => {
            state.isLoggedIn = false;
            state.dataAuth = {} as Auth;
        },
        LOG_IN: (state) => {
            state.isLoggedIn = true;
        },
    },
});

// Actions
export const authActions = authSlice.actions;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
