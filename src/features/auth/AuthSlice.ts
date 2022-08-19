import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Auth, DataAuthRegisReturn } from '../../models';
import { UpdateUser, Users } from '~/models';

interface Initial {
	dataAuth: DataAuthRegisReturn;
	dataInput: Auth;
	isLoadingSuccess: boolean;

	isLoggedIn: boolean;
	logging: boolean;

	updateUserSuccess: boolean;
	updateUserFailed: boolean;
}

const initialState: Initial = {
	dataAuth: {} as DataAuthRegisReturn,
	dataInput: {} as Auth,
	isLoadingSuccess: false,

	isLoggedIn: false,
	logging: false,

	updateUserSuccess: false,
	updateUserFailed: false,
};

const authSlice = createSlice({
	name: 'AUTH',
	initialState,
	reducers: {
		GET_AUTH: (state, action: PayloadAction<Auth>) => {
			state.logging = true;
		},
		GET_AUTH_SUCCESS: (state, action: PayloadAction<DataAuthRegisReturn>) => {
			state.dataAuth = action.payload;
			state.logging = false;
			state.isLoadingSuccess = true;
		},
		GET_AUTH_FAILED: (state) => {
			state.logging = false;
			state.isLoadingSuccess = false;
		},
		HANDLE_DATA_INPUT: (state, action: PayloadAction<Auth>) => {
			state.dataInput = action.payload;
		},
		IS_LOGGED_IN: (state) => {
			state.isLoggedIn = false;
		},
		LOG_OUT: (state) => {
			state.isLoggedIn = false;
			state.dataAuth = {} as DataAuthRegisReturn;
		},
		LOG_IN: (state) => {
			state.isLoggedIn = true;
		},
		UPDATE_USER: (state, action: PayloadAction<UpdateUser>) => {},
		UPDATE_USER_SUCCESS: (state, action: PayloadAction<Users>) => {
			console.log(action.payload);
			state.dataAuth.user = action.payload.user;
			state.updateUserSuccess = true;
		},
		UPDATE_USER_FAILED: (state) => {
			state.updateUserFailed = true;
		},
		RESET_UPDATE: (state) => {
			state.updateUserSuccess = false;
			state.updateUserFailed = false;
		},
	},
});

// Actions
export const authActions = authSlice.actions;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
