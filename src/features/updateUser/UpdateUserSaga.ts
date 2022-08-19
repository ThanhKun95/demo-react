import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { userApi } from '~/api';
import { UpdateUser } from '~/models';
import { updateUserActions } from './UpdateUserSlice';

function* updateUser(action: PayloadAction<UpdateUser>) {
	try {
		const response: UpdateUser = yield call(userApi.updateUser, action.payload);
		if (response) {
			yield put(updateUserActions.GET_UPDATE_USER_SUCCESS());
		}
	} catch (error) {
		console.log('Error:', error);
		yield put(updateUserActions.GET_UPDATE_USER_FAILED());
	}
}

export default function* updateUserSaga() {
	yield takeLatest(updateUserActions.GET_UPDATE_USER.type, updateUser);
}
