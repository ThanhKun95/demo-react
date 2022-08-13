import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, put, take, takeLatest } from 'redux-saga/effects';
import { userApi } from '~/api';
import { Auth, DataAuthRegisReturn } from '~/models';
import { authActions } from './AuthSlice';

function* getDataAuth(action: PayloadAction<Auth>) {
	try {
		const response: DataAuthRegisReturn = yield call(userApi.auth, action.payload);
		console.log(response);
		if (response) {
			yield put(authActions.GET_AUTH_SUCCESS(response));
		}
	} catch (error) {
		console.log('Error:', error);
		yield put(authActions.GET_AUTH_FAILED());
	}
}

function* handleLogin(token: string) {
	localStorage.setItem('KSCtoken', token);
	yield put(authActions.LOG_IN());
}
function handleLogout() {
	localStorage.removeItem('KSCtoken');
}

function* watchLogin() {
	while (true) {
		const token = localStorage.getItem('KSCtoken');
		const res: PayloadAction<DataAuthRegisReturn> = yield take(
			authActions.GET_AUTH_SUCCESS.type,
		);
		if (token || res) {
			yield fork(handleLogin, res.payload.user.token);
		}
		yield take(authActions.LOG_OUT.type);
		yield call(handleLogout);
	}
}

export default function* authSaga() {
	yield takeLatest(authActions.GET_AUTH.type, getDataAuth);
	yield fork(watchLogin);
}
