import { Auth, Regis, DataAuthRegisReturn } from '~/models';
import axiosClient from './axiosClient';

const blogAppApi = {
    auth: (user: Auth): Promise<Auth> => {
        return axiosClient.post('/users/login', user);
    },
    regis: (users: Regis): Promise<DataAuthRegisReturn> => {
        return axiosClient.post('/users', users);
    },
};
export default blogAppApi;
