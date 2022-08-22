import { Personal } from '~/models';
import axiosClient from './axiosClient';

const profileApi = {
	getProfile: (slug: string): Promise<Personal> => {
		return axiosClient.get(`profiles/${slug}`);
	},
	followUser: (username: string): Promise<Personal> => {
		return axiosClient.post(`/profiles/${username}/follow`);
	},
	unFollowUser: (username: string): Promise<Personal> => {
		return axiosClient.delete(`/profiles/${username}/follow`);
	},
};
export default profileApi;
