import { AddComment, CommentUpdateReturn, DeleteComment, MultipleComments } from '~/models';
import axiosClient from './axiosClient';

const commentApi = {
	addCommentArticle: ({ slug, data }: AddComment): Promise<CommentUpdateReturn> => {
		return axiosClient.post(`articles/${slug}/comments`, data);
	},

	getCommentArticle: (slug: string): Promise<MultipleComments> => {
		return axiosClient.get(`/articles/${slug}/comments`);
	},
	deleteComment: ({ slug, id }: DeleteComment) => {
		return axiosClient.delete(`/articles/${slug}/comments/${id}`);
	},
};
export default commentApi;
