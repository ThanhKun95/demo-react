import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
// import blogAppApi from '~/api/blogAppApi';
import { Authentication } from '~/models';

import { authenticationActions } from './AuthenticationSlice';
import blogAppApi from '~/api/blogAppApi';

function* getAuthentication(action: PayloadAction<Authentication>) {
    try {
        const response: Authentication = yield call(blogAppApi.authentication);
        yield put(authenticationActions.GET_AUTHENTICATION_SUCCESS(response));
    } catch (error) {
        console.log('Error:', error);
        yield put(authenticationActions.GET_AUTHENTICATION_FAILED());
    }
}

export default function* getAuthenticationSaga() {
    console.log(123);

    yield takeLatest(authenticationActions.GET_AUTHENTICATION.type, getAuthentication);
}
