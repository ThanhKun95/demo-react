import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '~/models';

interface initial {
	profile: Profile;
	isLoading: boolean;
	isLoadingSuccess: boolean;
}

const initialState: initial = {
	profile: {} as Profile,
	isLoading: false,
	isLoadingSuccess: false,
};

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		GET_PROFILE: (state, action: PayloadAction<string>) => {
			state.isLoading = true;
		},
		GET_PROFILE_SUCCESS: (state, action: PayloadAction<Profile>) => {
			state.profile = action.payload;
			state.isLoading = false;
			state.isLoadingSuccess = true;
		},
		GET_PROFILE_FAILED: (state) => {
			state.isLoadingSuccess = false;
		},
	},
});

// Actions
export const profileActions = profileSlice.actions;

// Reducer
const profileReducer = profileSlice.reducer;
export default profileReducer;
