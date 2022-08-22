import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { articleApi, favoriteApi } from '~/api';
import { CreateArticle, MultipleArticles, SingleArticle, UpdateArticle } from '~/models';
import { tagsActions } from '../tags/TagsSlice';
import { articleActions } from './ArticleSlice';

function* articleUser() {
	try {
		const response: MultipleArticles = yield call(articleApi.getListArticle);
		if (response) {
			yield put(articleActions.GET_ARTICLE_SUCCESS(response));
		}
	} catch (error) {
		yield put(articleActions.GET_ARTICLE_FAILED());
	}
}

function* articleAuthor(action: PayloadAction<string>) {
	try {
		const response: MultipleArticles = yield call(
			articleApi.getListArticleFilterByAuthor,
			action.payload,
		);
		if (response) {
			yield put(articleActions.GET_ARTICLE_SUCCESS(response));
			yield put(articleActions.GET_ARTICLE_BY_AUTHOR_SUCCESS());
		}
	} catch (error) {
		yield put(articleActions.GET_ARTICLE_FAILED());
	}
}

function* favoriteByUser(action: PayloadAction<string>) {
	try {
		const response: MultipleArticles = yield call(
			articleApi.getListArticleFavoritedByUser,
			action.payload,
		);
		if (response) {
			yield put(articleActions.FAVORITE_BY_USER_SUCCESS(response));
			yield put(articleActions.GET_ARTICLE_BY_AUTHOR_SUCCESS());
		}
	} catch (error) {
		yield put(articleActions.FAVORITE_BY_USER_FAILED());
	}
}

function* articleSlug(action: PayloadAction<string>) {
	try {
		const response: MultipleArticles = yield call(articleApi.getArticleBySlug, action.payload);
		if (response) {
			yield put(articleActions.GET_ARTICLE_SUCCESS(response));
		}
	} catch (error) {
		yield put(articleActions.GET_ARTICLE_FAILED());
	}
}

function* createArticle(action: PayloadAction<CreateArticle>) {
	try {
		const response: SingleArticle = yield call(articleApi.createArticle, action.payload);
		if (response) {
			yield put(articleActions.IS_CREATE_SUCCESS());
		}
	} catch (error) {
		yield put(articleActions.IS_CREATED_FAILED());
	}
}

function* updateArticle(action: PayloadAction<UpdateArticle>) {
	try {
		const response: SingleArticle = yield call(articleApi.upDateArticle, action.payload);

		if (response) {
			yield put(articleActions.UPDATE_SUCCESS());
		}
	} catch (error) {
		yield put(articleActions.UPDATE_FAILED());
	}
}

function* deleteArticle(action: PayloadAction<string>) {
	const response: {} = yield call(articleApi.deleteArticle, action.payload);
	try {
		if (response) {
			yield put(articleActions.IS_DELETE_SUCCESS());
		}
	} catch (error) {
		yield put(articleActions.IS_DELETE_FAILED());
	}
}

function* getArticleByTag(action: PayloadAction<string>) {
	try {
		const response: MultipleArticles = yield call(
			articleApi.getListArticleFilterByTag,
			action.payload,
		);
		if (response) {
			yield put(articleActions.GET_ARTICLE_SUCCESS(response));
		}
	} catch (error) {}
}

function* favorite(action: PayloadAction<string>) {
	try {
		const response: SingleArticle = yield call(favoriteApi.favoriteArticle, action.payload);
		if (response) {
			yield put(articleActions.FAVORITE_SUCCESS(response));
		}
	} catch (error) {}
}
function* unFavorite(action: PayloadAction<string>) {
	try {
		const response: SingleArticle = yield call(favoriteApi.unfavoriteArticle, action.payload);
		if (response) {
			yield put(articleActions.UNFAVORITE_SUCCESS(response));
		}
	} catch (error) {}
}

export default function* articleSaga() {
	yield takeLatest(articleActions.GET_ARTICLE.type, articleUser);
	yield takeLatest(articleActions.GET_ARTICLE_BY_AUTHOR.type, articleAuthor);
	yield takeLatest(articleActions.FAVORITE_BY_USER.type, favoriteByUser);
	yield takeLatest(articleActions.GET_ARTICLE_BY_SLUG.type, articleSlug);
	yield takeLatest(articleActions.IS_CREATE.type, createArticle);
	yield takeLatest(articleActions.UPDATE.type, updateArticle);
	yield takeLatest(articleActions.IS_DELETE.type, deleteArticle);
	yield takeLatest(tagsActions.SET_TAG.type, getArticleByTag);
	yield takeLatest(articleActions.FAVORITE.type, favorite);
	yield takeLatest(articleActions.UNFAVORITE.type, unFavorite);
}
