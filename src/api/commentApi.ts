import { MultipleComments } from '~/models';
import axiosClient from './axiosClient';

const commentApi = {
	addCommentArticle: (slug: string) => {
		axiosClient.post(`articles/${slug}/comments`);
	},

	getCommentArticle: (slug: string): Promise<MultipleComments> => {
		return axiosClient.get(`/articles/${slug}/comments`);
	},
	deleteComment: ({ slug, id }: { slug: string; id: string }) => {
		axiosClient.delete(`/articles/${slug}/comments/${id}`);
	},
};
export default commentApi;
