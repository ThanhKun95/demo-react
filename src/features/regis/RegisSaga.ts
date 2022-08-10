import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import blogAppApi from '~/api/blogAppApi';
import { Regis, DataAuthRegisReturn } from '~/models';
import { regisActions } from './RegisSlice';

function* getRegis(action: PayloadAction<Regis>) {
    try {
        const response: DataAuthRegisReturn = yield call(blogAppApi.regis, action.payload);
        if (response) {
            yield put(regisActions.GET_REGIS_SUCCESS());

            localStorage.setItem(response.user.email, response.user.token);
        }
    } catch (error) {
        console.log('Error:', error);
        yield put(regisActions.GET_REGIS_FAILED());
    }
}

export default function* regisSaga() {
    yield takeLatest(regisActions.GET_REGIS.type, getRegis);
}
