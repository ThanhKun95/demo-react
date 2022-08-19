import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Personal } from '~/models';

interface initial {
	personal: Personal;
	isLoading: boolean;
	isLoadingSuccess: boolean;
}

const initialState: initial = {
	personal: {} as Personal,
	isLoading: false,
	isLoadingSuccess: false,
};

const personalSlice = createSlice({
	name: 'personal',
	initialState,
	reducers: {
		GET_PERSONAL: (state, action: PayloadAction<string>) => {
			state.isLoading = true;
		},
		GET_PERSONAL_SUCCESS: (state, action: PayloadAction<Personal>) => {
			state.personal = action.payload;
			state.isLoading = false;
			state.isLoadingSuccess = true;
		},
		GET_PERSONAL_FAILED: (state) => {
			state.isLoadingSuccess = false;
		},
		RESET_PERSONAL: (state) => {
			state.personal = {} as Personal;
		},

		FOLLOW: (state, action: PayloadAction<string>) => {},
		FOLLOW_SUCCESS: (state) => {
			state.personal.profile.following = true;
		},

		UNFOLLOW: (state, action: PayloadAction<string>) => {},
		UNFOLLOW_SUCCESS: (state) => {
			state.personal.profile.following = false;
		},
	},
});

// Actions
export const personalActions = personalSlice.actions;

// Reducer
const personalReducer = personalSlice.reducer;
export default personalReducer;
