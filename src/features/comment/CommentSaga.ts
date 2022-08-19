import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import { commentApi } from '~/api';
import { AddComment, CommentUpdateReturn, DeleteComment, MultipleComments } from '~/models';
import { commentActions } from './CommentSlice';

function* getComment(action: PayloadAction<string>) {
	try {
		const response: MultipleComments = yield call(commentApi.getCommentArticle, action.payload);
		if (response) {
			yield put(commentActions.GET_COMMENT_SUCCESS(response));
		}
	} catch (error) {
		console.log('Error:', error);
		yield put(commentActions.GET_COMMENT_FAILED());
	}
}

function* updateComment(action: PayloadAction<AddComment>) {
	try {
		const response: CommentUpdateReturn = yield call(
			commentApi.addCommentArticle,
			action.payload,
		);
		if (response) {
			yield put(commentActions.UPDATE_COMMENT_SUCCESS(response.comment));
		}
	} catch (error) {
		console.log('Error:', error);
		yield put(commentActions.UPDATE_COMMENT_FAILED());
	}
}

function* deleteComment(action: PayloadAction<DeleteComment>) {
	try {
		const response: CommentUpdateReturn = yield call(commentApi.deleteComment, action.payload);
		if (response) {
			yield put(commentActions.DELETE_COMMENT_SUCCESS(action.payload.id));
		}
	} catch (error) {
		console.log('Error:', error);
		yield put(commentActions.DELETE_COMMENT_FAILED());
	}
}

export default function* commentSaga() {
	yield takeLatest(commentActions.GET_COMMENT.type, getComment);
	yield takeLatest(commentActions.UPDATE_COMMENT.type, updateComment);
	yield takeLeading(commentActions.DELETE_COMMENT.type, deleteComment);
}
