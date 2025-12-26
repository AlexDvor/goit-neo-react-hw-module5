import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';

import API from '../../api_image';

const MoviesPage = () => {
	const [movies, setMovies] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	const query = searchParams.get('query') ?? '';

	useEffect(() => {
		if (!query.trim()) return;

		const fetchMovies = async () => {
			try {
				const { results } = await API.getMovieBySearch(query);
				setMovies(results || []);
			} catch (error) {
				console.log('🚀 ~ error:', error);
			}
		};

		fetchMovies();
	}, [query]);

	const handleSubmit = value => {
		if (!value.trim()) return;
		setSearchParams({ query: value });
	};

	return (
		<>
			<SearchBar submitFn={handleSubmit} initialValue={query} />
			{movies.length > 0 && <MovieList movies={movies} />}
		</>
	);
};

export default MoviesPage;
