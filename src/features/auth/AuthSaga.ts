import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, put, take, takeLatest } from 'redux-saga/effects';
import blogAppApi from '~/api/blogAppApi';
import { Auth, DataAuthRegisReturn } from '~/models';
import { authActions } from './AuthSlice';

function* getDataAuth(action: PayloadAction<Auth>) {
    try {
        const response: DataAuthRegisReturn = yield call(blogAppApi.auth, action.payload);
        if (response) {
            yield put(authActions.GET_AUTH_SUCCESS(response));
        }
    } catch (error) {
        console.log('Error:', error);
        yield put(authActions.GET_AUTH_FAILED());
    }
}

function* handleLogin(action: PayloadAction<DataAuthRegisReturn>) {
    console.log(action);
    yield put(authActions.LOG_IN());
}
function handleLogout(lsKey: string) {}

function* watchLogin() {
    while (true) {
        const res: PayloadAction<DataAuthRegisReturn> = yield take(authActions.GET_AUTH_SUCCESS.type);
        const resToken = res.payload.user.token.split('.')[0];
        const lsKey = res.payload.user.email;
        const token = localStorage.getItem(lsKey);

        yield fork(handleLogin, res);
        if (token?.includes(resToken)) {
            yield take(authActions.LOG_OUT.type);
            yield call(handleLogout, lsKey);
        }
    }
}

export default function* authSaga() {
    yield takeLatest(authActions.GET_AUTH.type, getDataAuth);
    yield fork(watchLogin);
}
