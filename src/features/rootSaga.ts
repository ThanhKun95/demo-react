import { all } from 'redux-saga/effects';
import getAuthenticationSaga from './authentication/AuthenticationSaga';
export default function* rootSaga() {
    yield all([getAuthenticationSaga()]);
}
