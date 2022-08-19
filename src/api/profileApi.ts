import { Profile } from '~/models';
import axiosClient from './axiosClient';

const profileApi = {
	getProfile: (slug: string): Promise<Profile> => {
		return axiosClient.get(`profiles/${slug}`);
	},
	followUser: (username: string): Promise<Profile> => {
		return axiosClient.get(`/profiles/${username}/follow`);
	},
	unFollowUser: (username: string): Promise<Profile> => {
		return axiosClient.delete(`/profiles/${username}/follow`);
	},
};
export default profileApi;
