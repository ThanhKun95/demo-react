import {
	AddComment,
	MultipleArticles,
	MultipleComments,
	Profile,
	SingleArticle,
	UpdateArticle,
} from '~/models';
import axiosClient from './axiosClient';

const articleApi = {
	getListArticle: (): Promise<MultipleArticles> => {
		return axiosClient.get('/articles?limit=10?offset=0');
	},
	getListArticleFilterByTag: (tag: string): Promise<MultipleArticles> => {
		return axiosClient.get(`/articles?tag=${tag}`);
	},
	getListArticleFilterByAuthor: (author: string): Promise<MultipleArticles> => {
		return axiosClient.get(`/articles?author=${author}`);
	},
	getListArticleFavoritedByUser: (user: string): Promise<MultipleArticles> => {
		return axiosClient.get(`/articles?favorited=${user}`);
	},

	getFeedArticles: (): Promise<any> => {
		return axiosClient.get(`/articles/feed`);
	},

	getArticle: (slug: string): Promise<SingleArticle> => {
		return axiosClient.get(`/articles/${slug}`);
	},
	createArticle: (): Promise<any> => {
		return axiosClient.post(`/articles`);
	},
	upDateArticle: (slug: string): Promise<UpdateArticle> => {
		return axiosClient.put(`/articles/${slug}`);
	},
	deleteArticle: (slug: string) => {
		axiosClient.delete(`articles/${slug}`);
	},
};
export default articleApi;
