import { call, put, takeLatest } from 'redux-saga/effects';
import { tagsApi } from '~/api';
import { Tags } from '~/models';
import { tagsActions } from './TagsSlice';

function* tags() {
	try {
		const response: Tags = yield call(tagsApi.getTags);
		if (response) {
			yield put(tagsActions.GET_TAGS_SUCCESS(response));
		}
	} catch (error) {
		console.log('Error:', error);
		yield put(tagsActions.GET_TAGS_FAILED());
	}
}

export default function* TagsSaga() {
	yield takeLatest(tagsActions.GET_TAGS.type, tags);
}
