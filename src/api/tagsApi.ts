import axiosClient from './axiosClient';

const tagsApi = {
	getTags: () => {
		axiosClient.get(`/tags`);
	},
};
export default tagsApi;
