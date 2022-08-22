import { Auth, DataAuthRegisReturn, Regis, UpdateUser, Users } from '~/models';
import axiosClient from './axiosClient';

const userApi = {
	auth: (user: Auth): Promise<Auth> => {
		return axiosClient.post('/users/login', user);
	},
	regis: (users: Regis): Promise<DataAuthRegisReturn> => {
		return axiosClient.post('/users', users);
	},
	getCurrUser: (): Promise<Users> => {
		return axiosClient.get('/user');
	},
	updateUser: (user: UpdateUser): Promise<Users> => {
		return axiosClient.put('/user', user);
	},
};
export default userApi;
