import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Authentication } from '../../models';

interface initial {
    authentication: Authentication;
    isLoading: boolean;
    isLoadingSuccess: boolean;
}

const initialState: initial = {
    authentication: {} as Authentication,
    isLoading: false,
    isLoadingSuccess: false,
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        GET_AUTHENTICATION: (state) => {
            state.isLoading = true;
        },
        GET_AUTHENTICATION_SUCCESS: (state, action: PayloadAction<Authentication>) => {
            state.authentication = action.payload;
            state.isLoading = false;
            state.isLoadingSuccess = true;
        },
        GET_AUTHENTICATION_FAILED: (state) => {
            state.isLoadingSuccess = false;
        },
    },
});

// Actions
export const authenticationActions = authenticationSlice.actions;

// Reducer
const authenticationReducer = authenticationSlice.reducer;
export default authenticationReducer;
