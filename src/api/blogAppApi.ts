import { Authentication, Registration } from '../models';
import axiosClient from './axiosClient';

const blogAppApi = {
    authentication: (): Promise<Authentication> => {
        return axiosClient.get('/article');
    },
    registration: (): Promise<Registration> => {
        return axiosClient.get('/users');
    },
};
export default blogAppApi;
