import { Auth, Regis, DataAuthRegisReturn, Users, MultipleArticles, Comment, MultipleComments } from '~/models';
import axiosClient from './axiosClient';

const blogAppApi = {
    auth: (user: Auth): Promise<Auth> => {
        return axiosClient.post('/users/login', user);
    },
    regis: (users: Regis): Promise<DataAuthRegisReturn> => {
        return axiosClient.post('/users', users);
    },
    getCurrUser: (token: string): Promise<Users> => {
        return axiosClient.get('/user', {
            headers: {
                authorization: `Token ${token}`,
            },
        });
    },
    getListArticle: (): Promise<MultipleArticles> => {
        return axiosClient.get('/articles?limit=10?offset=0');
    },
    getCommentArticle: (slug: string): Promise<MultipleComments> => {
        return axiosClient.get(`/articles/${slug}/comments`);
    },
};
export default blogAppApi;
