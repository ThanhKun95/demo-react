import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UpdateUser } from '~/models';

interface initial {
	isLoading: boolean;
	isLoadingSuccess: boolean;
}

const initialState: initial = {
	isLoading: false,
	isLoadingSuccess: false,
};

const updateUserSlice = createSlice({
	name: 'updateUser',
	initialState,
	reducers: {
		GET_UPDATE_USER: (state, action: PayloadAction<UpdateUser>) => {
			state.isLoading = true;
		},
		GET_UPDATE_USER_SUCCESS: (state) => {
			state.isLoading = false;
			state.isLoadingSuccess = true;
		},
		GET_UPDATE_USER_FAILED: (state) => {
			state.isLoadingSuccess = false;
		},
	},
});

// Actions
export const updateUserActions = updateUserSlice.actions;

// Reducer
const updateUserReducer = updateUserSlice.reducer;
export default updateUserReducer;
