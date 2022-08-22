import { SingleArticle } from '~/models';
import axiosClient from './axiosClient';

const favoriteApi = {
	favoriteArticle: (slug: string): Promise<SingleArticle> => {
		return axiosClient.post(`articles/${slug}/favorite`);
	},
	unfavoriteArticle: (slug: string): Promise<SingleArticle> => {
		return axiosClient.delete(`articles/${slug}/favorite`);
	},
};
export default favoriteApi;
