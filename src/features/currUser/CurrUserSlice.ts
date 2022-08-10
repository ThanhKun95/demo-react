import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Users } from '~/models';

interface initial {
    isLoading: boolean;
    isLoadingSuccess: boolean;
}

const initialState: initial = {
    isLoading: false,
    isLoadingSuccess: false,
};

const currUserSlice = createSlice({
    name: 'currUserent',
    initialState,
    reducers: {
        GET_USER_CURR: (state) => {
            state.isLoading = true;
        },
        GET_USER_CURR_SUCCESS: (state) => {
            state.isLoading = false;
            state.isLoadingSuccess = true;
        },
        GET_USER_CURR_FAILED: (state) => {
            state.isLoadingSuccess = false;
        },
    },
});

// Actions
export const currUserActions = currUserSlice.actions;

// Reducer
const currUserReducer = currUserSlice.reducer;
export default currUserReducer;
