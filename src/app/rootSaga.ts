import { all } from 'redux-saga/effects';
import authSaga from '~/features/auth/AuthSaga';
import regisSaga from '~/features/regis/RegisSaga';
export default function* rootSaga() {
    yield all([authSaga(), regisSaga()]);
}
