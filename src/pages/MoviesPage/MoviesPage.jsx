import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import Loader from '../../components/Loader/Loader';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import API from '../../api_image';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
	const [movies, setMovies] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [isLoading, setIsLoading] = useState(false);

	const query = searchParams.get('query') ?? '';

	useEffect(() => {
		if (!query.trim()) return;

		const fetchMovies = async () => {
			try {
				setIsLoading(true);
				const { results } = await API.getMovieBySearch(query);
				setMovies(results || []);
			} catch (error) {
				setMovies([]);
				console.log('🚀 ~ error:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchMovies();
	}, [query]);

	const handleSubmit = value => {
		if (!value) return;
		setSearchParams({ query: value });
	};

	return (
		<>
			<div className={s.searchContainer}>
				<SearchBar submitFn={handleSubmit} initialValue={query} />
			</div>
			{isLoading && <Loader />}
			{movies.length > 0 && <MovieList movies={movies} />}
			{!isLoading && movies.length === 0 && query && (
				<div className='container'>
					<p className={s.notFoundMs}>
						We dont have any movie like this - "{query}"
					</p>
				</div>
			)}
		</>
	);
};

export default MoviesPage;
