import axios from 'axios';

/* INTERCEPTOR EXAMPLES

REQUEST INTERCEPTOR

axios.interceptors.request.use((config) => {
    let token = 'example';

	if (token) {
		const headers = {
			"Authorization": "Bearer " + token
		}
		config.headers = headers;
    }
    
	return config;
});

RESPONSE INTERCEPTOR

axios.interceptors.response.use((response) => {

	if (response.data !== undefined) {
		let error = response.data.error;
		let message = response.data.message;

		if (error && message == 'Unauthenticated' && cookies.get('token')) {
			alert('Your session has expired you will be redirected');
			cookies.remove('token');
			window.location = '/login';
		}
	}
	return response;
}, (error) => {
	console.log(error);
	return Promise.reject(error);
});

 */

export const getExample = () => {
    return axios.get('https://picsum.photos/200/300')
        .catch(error => console.log('getExample error: ' + error))
        .then(response => response.config.url);
}