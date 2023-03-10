import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import authSlice from '../features/auth/AuthSlice';
import regisSlice from '../features/regis/RegisSlice';
import currUserSlice from '../features/currUser/CurrUserSlice';
import articleSlice from '../features/article/ArticleSlice';
import commentSlice from '../features/comment/CommentSlice';
import personalSlice from '../features/personal/PersonalSlice';
import updateUserSlice from '../features/updateUser/UpdateUserSlice';
import tagsSlice from '../features/tags/TagsSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
	reducer: {
		auth: authSlice,
		regis: regisSlice,
		currentUser: currUserSlice,
		articles: articleSlice,
		comments: commentSlice,
		personal: personalSlice,
		upDateUser: updateUserSlice,
		tags: tagsSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
