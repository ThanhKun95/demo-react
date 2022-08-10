import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import blogAppApi from '~/api/blogAppApi';
import { Users } from '~/models';
import { currUserActions } from './CurrUserSlice';

function* getCurrUser() {
    try {
        // localStorage.getItem()
        const response: Users = yield call(
            blogAppApi.getCurrUser,
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvZ2luMTJAZ21haWwuY29tIiwidXNlcm5hbWUiOiJsb2dpbjEyIiwiaWF0IjoxNjU5ODY1NjQyLCJleHAiOjE2NjUwNDk2NDJ9.MGJ1CITqOejPsxWdbB8SeLu07MnBI9lN9TBgaqbeYJU',
        );
        if (response) {
            yield put(currUserActions.GET_USER_CURR_SUCCESS());

            localStorage.setItem(response.user.email, response.user.token);
        }
    } catch (error) {
        console.log('Error:', error);
        yield put(currUserActions.GET_USER_CURR_FAILED());
    }
}

export default function* currUserSaga() {
    yield takeLatest(currUserActions.GET_USER_CURR.type, getCurrUser);
}
