import { Tags } from '~/models';
import axiosClient from './axiosClient';

const tagsApi = {
	getTags: (): Promise<Tags> => {
		return axiosClient.get(`/tags`);
	},
};
export default tagsApi;
