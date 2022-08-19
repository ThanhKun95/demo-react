import axiosClient from './axiosClient';

const favoriteApi = {
	favoriteArticle: (slug: string) => {
		axiosClient.post(`articles/${slug}/favorite`);
	},
	unfavoriteArticle: (slug: string) => {
		axiosClient.delete(`articles/${slug}/favorite`);
	},
};
export default favoriteApi;
