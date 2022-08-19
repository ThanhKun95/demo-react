import { Article, CreateArticle, MultipleArticles, SingleArticle, UpdateArticle } from '~/models';
import axiosClient from './axiosClient';

const articleApi = {
	getListArticle: (): Promise<MultipleArticles> => {
		return axiosClient.get('/articles?limit=20&offset=0');
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

	getArticleBySlug: (slug: string): Promise<SingleArticle> => {
		return axiosClient.get(`/articles/${slug}`);
	},
	createArticle: (article: CreateArticle): Promise<Article> => {
		return axiosClient.post(`/articles`, article);
	},
	upDateArticle: ({
		slug,
		data,
	}: {
		slug: string;
		data: CreateArticle;
	}): Promise<UpdateArticle> => {
		return axiosClient.put(`/articles/${slug}`, data);
	},
	deleteArticle: (slug: string) => {
		return axiosClient.delete(`articles/${slug}`);
	},
};
export default articleApi;
