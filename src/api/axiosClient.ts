import axios from 'axios';
const token = localStorage.getItem('KSCtoken');
const axiosClient = axios.create({
	baseURL: 'https://conduit.productionready.io/api',
	headers: {
		'Content-Type': 'application/json',
		authorization: `Token ${token}`,
	},
});

axiosClient.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);

axiosClient.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		return Promise.reject(error);
	},
);

export default axiosClient;
