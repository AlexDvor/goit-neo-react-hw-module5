import API from '../../api_image';
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const data = await API.getTrendingMovies();
				if (!data.results) return;
				setMovies(data.results);
			} catch (error) {
				console.log('🚀 ~ error:', error);
			}
		};

		fetchMovies();
	}, []);

	return (
		<>
			<h1>Tranding Movie</h1>
			{movies.length > 0 && <MovieList movies={movies} />}
		</>
	);
};

export default HomePage;
