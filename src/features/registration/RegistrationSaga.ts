import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import blogAppApi from '~/api/blogAppApi';
import { Registration } from '~/models';
import { registrationActions } from './RegistrationSlice';

function* getRegistration(action: PayloadAction<Registration>) {
    try {
        const response: Registration = yield call(blogAppApi.registration, action.payload);
        if (response) {
            yield put(registrationActions.GET_REGISTRATION_SUCCESS(response));
        }
    } catch (error) {
        console.log('Error:', error);
        yield put(registrationActions.GET_REGISTRATION_FAILED());
    }
}

export default function* getRegistrationSaga() {
    yield takeLatest(registrationActions.GET_REGISTRATION.type, getRegistration);
}
