import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tags } from '~/models';

interface initial {
	tags: string[];
	tag: string;
	isLoading: boolean;
	isLoadingSuccess: boolean;
}

const initialState: initial = {
	tags: [],
	tag: '',
	isLoading: false,
	isLoadingSuccess: false,
};

const tagsSlice = createSlice({
	name: 'tagsUser',
	initialState,
	reducers: {
		GET_TAGS: (state) => {
			state.isLoading = true;
		},
		GET_TAGS_SUCCESS: (state, action: PayloadAction<Tags>) => {
			state.tags = action.payload.tags;
			state.isLoading = false;
			state.isLoadingSuccess = true;
		},
		GET_TAGS_FAILED: (state) => {
			state.isLoadingSuccess = false;
		},

		SET_TAG: (state, action: PayloadAction<string>) => {
			state.tag = action.payload;
		},
		RESET_TAG: (state) => {
			state.tags = [];
		},
	},
});

// Actions
export const tagsActions = tagsSlice.actions;

// Reducer
const tagsReducer = tagsSlice.reducer;
export default tagsReducer;
