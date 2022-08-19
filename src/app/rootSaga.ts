import { all } from 'redux-saga/effects';
import authSaga from '~/features/auth/AuthSaga';
import regisSaga from '~/features/regis/RegisSaga';
import currUserSaga from '~/features/currUser/CurrUserSaga';
import articleSaga from '~/features/article/ArticleSaga';
import commentSaga from '~/features/comment/CommentSaga';
import profileSaga from '~/features/profile/ProfileSaga';
import updateUserSaga from '~/features/updateUser/UpdateUserSaga';
export default function* rootSaga() {
	yield all([
		authSaga(),
		regisSaga(),
		currUserSaga(),
		articleSaga(),
		commentSaga(),
		profileSaga(),
		updateUserSaga(),
	]);
}
