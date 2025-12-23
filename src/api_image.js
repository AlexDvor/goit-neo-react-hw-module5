import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';

const API_KEY = import.meta.env.VITE_ACCESS_KEY;

const getSearchParams = (page, query, per_page = 20) => {
	return {
		client_id: API_KEY,
		page,
		query,
		per_page,
	};
};

const API = {
	async getPhotoBySearch(page, query) {
		const response = await axios.get('', { params: getSearchParams(page, query) });
		return response.data;
	},
};

export default API;
