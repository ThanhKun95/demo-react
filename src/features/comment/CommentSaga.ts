import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { commentApi } from '~/api';
import { MultipleComments } from '~/models';
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

export default function* commentSaga() {
	yield takeLatest(commentActions.GET_COMMENT.type, getComment);
}
