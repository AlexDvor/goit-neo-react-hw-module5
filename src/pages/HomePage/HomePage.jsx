import API from '../../api_image';
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				setError(false);
				const data = await API.getTrendingMovies();
				if (!data.results) return;
				setMovies(data.results);
			} catch (error) {
				setError(true);
				setMovies([]);
				console.log('🚀 ~ error:', error);
			}
		};

		fetchMovies();
	}, []);

	return (
		<>
			<h1>Tranding Movie</h1>
			{movies.length > 0 && <MovieList movies={movies} />}
			{error && <ErrorMessage />}
		</>
	);
};

export default HomePage;
