import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Regis } from '~/models';

interface initial {
    isLoading: boolean;
    isLoadingSuccess: boolean;
}

const initialState: initial = {
    isLoading: false,
    isLoadingSuccess: false,
};

const regisSlice = createSlice({
    name: 'REGISTER',
    initialState,
    reducers: {
        GET_REGIS: (state, action: PayloadAction<Regis>) => {
            state.isLoading = true;
        },
        GET_REGIS_SUCCESS: (state) => {
            state.isLoading = false;
            state.isLoadingSuccess = true;
        },
        GET_REGIS_FAILED: (state) => {
            state.isLoadingSuccess = false;
        },
    },
});

// Actions
export const regisActions = regisSlice.actions;

// Reducer
const regisReducer = regisSlice.reducer;
export default regisReducer;
