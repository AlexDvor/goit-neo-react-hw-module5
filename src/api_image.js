import axios from 'axios';

const API_KEY = import.meta.env.VITE_ACCESS_KEY_TOKEN;

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;
axios.defaults.headers.common['Accept'] = 'application/json';

const axiosParams = (query, page) => {
	return {
		query,
		page,
		include_adult: true,
	};
};

const API = {
	async getTrendingMovies() {
		const response = await axios.get('/trending/movie/day');
		return response.data;
	},

	async getMovieById(id) {
		const response = await axios.get(`/movie/${id}`);
		return response.data;
	},

	async getMovieBySearch(query, page = 1) {
		const response = await axios.get(`/search/movie`, {
			params: axiosParams(query, page),
		});
		return response.data;
	},
	async getCastByMovieId(movieId) {
		const response = await axios.get(`/movie/${movieId}/credits`);
		return response.data;
	},

	async getReviewByMovieId(movieId) {
		const response = await axios.get(`/movie/${movieId}/reviews`);
		return response.data;
	},
};

export default API;

// https://api.themoviedb.org/3/search/movie
