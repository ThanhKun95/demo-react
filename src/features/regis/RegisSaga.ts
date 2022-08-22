import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { Regis, DataAuthRegisReturn } from '~/models';
import { regisActions } from './RegisSlice';
import { userApi } from '~/api';

function* getRegis(action: PayloadAction<Regis>) {
	try {
		const response: DataAuthRegisReturn = yield call(userApi.regis, action.payload);
		if (response) {
			yield put(regisActions.GET_REGIS_SUCCESS());

			localStorage.setItem('KSCtoken', response.user.token);
		}
	} catch (error) {
		yield put(regisActions.GET_REGIS_FAILED());
	}
}

export default function* regisSaga() {
	yield takeLatest(regisActions.GET_REGIS.type, getRegis);
}
