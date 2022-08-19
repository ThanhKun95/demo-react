import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { articleApi } from '~/api';
import { MultipleArticles } from '~/models';
import { articleActions } from './ArticleSlice';

function* articleUser(action: PayloadAction<MultipleArticles>) {
	try {
		const response: MultipleArticles = yield call(articleApi.getListArticle);
		if (response) {
			yield put(articleActions.GET_ARTICLE_SUCCESS(response));
		}
	} catch (error) {
		console.log('Error:', error);
		yield put(articleActions.GET_ARTICLE_FAILED());
	}
}

export default function* articleSaga() {
	yield takeLatest(articleActions.GET_ARTICLE.type, articleUser);
}
