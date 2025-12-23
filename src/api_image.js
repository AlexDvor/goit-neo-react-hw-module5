import axios from 'axios';

const API_KEY = import.meta.env.VITE_ACCESS_KEY_TOKEN;

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;
axios.defaults.headers.common['Accept'] = 'application/json';

const API = {
	async getTrendingMovies() {
		const response = await axios.get('/trending/movie/day');
		return response.data;
	},

	async getMovieById(id) {
		const response = await axios.get(`/movie/${id}`);
		return response.data;
	},
};

export default API;
