import { call, put, takeLatest } from 'redux-saga/effects';
import { userApi } from '~/api';
import { Users } from '~/models';
import { currUserActions } from './CurrUserSlice';

function* getCurrUser() {
	try {
		const response: Users = yield call(userApi.getCurrUser);
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
