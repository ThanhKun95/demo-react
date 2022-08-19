import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import { profileApi } from '~/api';
import { Personal } from '~/models';
import { personalActions } from './PersonalSlice';

function* personal(action: PayloadAction<string>) {
	try {
		const response: Personal = yield call(profileApi.getProfile, action.payload);
		if (response) {
			yield put(personalActions.GET_PERSONAL_SUCCESS(response));
		}
	} catch (error) {
		console.log('Error:', error);
		yield put(personalActions.GET_PERSONAL_FAILED());
	}
}

function* follow(action: PayloadAction<string>) {
	try {
		const response: Personal = yield call(profileApi.followUser, action.payload);
		if (response) {
			yield put(personalActions.FOLLOW_SUCCESS());
		}
	} catch (error) {
		console.log('Error:', error);
		// yield put(personalActions.GET_PERSONAL_FAILED());
	}
}

function* unFollow(action: PayloadAction<string>) {
	try {
		const response: Personal = yield call(profileApi.unFollowUser, action.payload);
		if (response) {
			yield put(personalActions.UNFOLLOW_SUCCESS());
		}
	} catch (error) {
		console.log('Error:', error);
		// yield put(personalActions.GET_PERSONAL_FAILED());
	}
}

export default function* personalSaga() {
	yield takeLatest(personalActions.GET_PERSONAL.type, personal);
	yield takeLeading(personalActions.FOLLOW.type, follow);
	yield takeLeading(personalActions.UNFOLLOW.type, unFollow);
}
