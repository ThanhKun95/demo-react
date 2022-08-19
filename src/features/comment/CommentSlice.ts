import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddComment, Comment, DeleteComment, MultipleComments } from '~/models';

interface initial {
	comments: Comment[];
	getCommentSuccess: boolean;
	getCommentFailed: boolean;

	updateCommentSuccess: boolean;
	updateCommentFailed: boolean;

	deleteCommentLoading: boolean;
	deleteCommentSuccess: boolean;
	deleteCommentFailed: boolean;
}

const initialState: initial = {
	comments: [],
	getCommentSuccess: false,
	getCommentFailed: false,

	updateCommentSuccess: false,
	updateCommentFailed: false,

	deleteCommentLoading: false,
	deleteCommentSuccess: false,
	deleteCommentFailed: false,
};

const commentSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		GET_COMMENT: (state, action: PayloadAction<string>) => {},
		GET_COMMENT_SUCCESS: (state, action: PayloadAction<MultipleComments>) => {
			const dataSort = [...action.payload.comments];
			dataSort.sort(function (a, b) {
				const x = new Date(a.createdAt);
				const y = new Date(b.createdAt);
				return x > y ? -1 : x < y ? 1 : 0;
			});
			state.comments = dataSort;
			state.getCommentSuccess = true;
		},
		GET_COMMENT_FAILED: (state) => {
			state.getCommentFailed = true;
		},
		RESET_GET_COMMENT: (state) => {
			state.getCommentFailed = false;
			state.getCommentSuccess = false;
			state.comments = [];
		},

		UPDATE_COMMENT: (state, PayloadAction: PayloadAction<AddComment>) => {},
		UPDATE_COMMENT_SUCCESS: (state, action: PayloadAction<Comment>) => {
			state.comments.unshift(action.payload);
			state.updateCommentSuccess = true;
		},
		UPDATE_COMMENT_FAILED: (state) => {
			state.updateCommentFailed = true;
		},
		UPDATE_COMMENT_RESET: (state) => {
			state.updateCommentSuccess = false;
			state.updateCommentFailed = false;
			state.comments = [];
		},
		DELETE_COMMENT: (state, PayloadAction: PayloadAction<DeleteComment>) => {
			state.deleteCommentLoading = true;
		},
		DELETE_COMMENT_SUCCESS: (state, action: PayloadAction<number>) => {
			const newComments = state.comments.filter((comment) => comment.id !== action.payload);
			state.comments = newComments;
			state.deleteCommentSuccess = true;
			state.deleteCommentLoading = false;
		},
		DELETE_COMMENT_FAILED: (state) => {
			state.deleteCommentFailed = true;
			state.deleteCommentLoading = false;
		},
		DELETE_COMMENT_RESET: (state) => {
			state.deleteCommentSuccess = false;
			state.deleteCommentFailed = false;
		},
	},
});

// Actions
export const commentActions = commentSlice.actions;

// Reducer
const commentReducer = commentSlice.reducer;
export default commentReducer;
