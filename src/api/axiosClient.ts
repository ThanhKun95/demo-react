import axios from 'axios';
const KSCtoken = localStorage.getItem('KSCtoken');
const token = KSCtoken ? `Token ${KSCtoken}` : false;
const axiosClient = axios.create({
	baseURL: 'https://conduit.productionready.io/api',
	headers: {
		'Content-Type': 'application/json',
		authorization: token,
	},
});

axiosClient.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		console.log('Error in Interceptor: ', error);
		return Promise.reject(error);
	},
);

axiosClient.interceptors.response.use(function (response) {
	return response.data;
});

export default axiosClient;
