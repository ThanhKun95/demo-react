import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Registration } from '~/models';

interface initial {
    registration: Registration;
    isLoading: boolean;
    isLoadingSuccess: boolean;
}

const initialState: initial = {
    registration: {} as Registration,
    isLoading: false,
    isLoadingSuccess: false,
};

const registrationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        GET_REGISTRATION: (state, action: PayloadAction<Registration>) => {
            state.isLoading = true;
        },
        GET_REGISTRATION_SUCCESS: (state, action: PayloadAction<Registration>) => {
            state.registration = action.payload;
            state.isLoading = false;
            state.isLoadingSuccess = true;
        },
        GET_REGISTRATION_FAILED: (state) => {
            state.isLoadingSuccess = false;
        },
    },
});

// Actions
export const registrationActions = registrationSlice.actions;

// Reducer
const registrationReducer = registrationSlice.reducer;
export default registrationReducer;
