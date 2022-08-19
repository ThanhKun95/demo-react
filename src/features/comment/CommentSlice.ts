import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MultipleComments } from '~/models';

interface initial {
    isLoading: boolean;
    isLoadingSuccess: boolean;
}

const initialState: initial = {
    isLoading: false,
    isLoadingSuccess: false,
};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        GET_COMMENT: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
        },
        GET_COMMENT_SUCCESS: (state, action: PayloadAction<MultipleComments>) => {
            state.isLoading = false;
            state.isLoadingSuccess = true;
        },
        GET_COMMENT_FAILED: (state) => {
            state.isLoadingSuccess = false;
        },
    },
});

// Actions
export const commentActions = commentSlice.actions;

// Reducer
const commentReducer = commentSlice.reducer;
export default commentReducer;
