import { Authentication, Registration } from '../models';
import axiosClient from './axiosClient';

const blogAppApi = {
    authentication: (user: Authentication): Promise<Authentication> => {
        return axiosClient.post('/users/login');
    },
    registration: (users: Registration): Promise<Registration> => {
        return axiosClient.post('/users');
    },
};
export default blogAppApi;
