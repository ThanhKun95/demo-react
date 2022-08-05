import { Authentication, Registration } from '../models';
import axiosClient from './axiosClient';

const blogAppApi = {
    authentication: (): Promise<Authentication> => {
        return axiosClient.get('/users/login');
    },
    registration: (): Promise<Registration> => {
        return axiosClient.get('/api/users');
    },
};
export default blogAppApi;
