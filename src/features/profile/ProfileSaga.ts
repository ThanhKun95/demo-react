import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { profileApi } from '~/api';
import { Profile } from '~/models';
import { profileActions } from './ProfileSlice';

function* profile(action: PayloadAction<string>) {
	const token = localStorage.getItem('KSCtoken');

	try {
		const response: Profile = yield call(profileApi.getProfile, action.payload);
		if (response) {
			yield put(profileActions.GET_PROFILE_SUCCESS(response));
		}
	} catch (error) {
		console.log('Error:', error);
		yield put(profileActions.GET_PROFILE_FAILED());
	}
}

export default function* profileSaga() {
	yield takeLatest(profileActions.GET_PROFILE.type, profile);
}
