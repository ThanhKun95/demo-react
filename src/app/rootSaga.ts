import { all } from 'redux-saga/effects';
import getAuthenticationSaga from '~/features/authentication/AuthenticationSaga';
export default function* rootSaga() {
    yield all([getAuthenticationSaga()]);
}
