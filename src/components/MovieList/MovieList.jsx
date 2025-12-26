import MovieItem from '../MovieItem/MovieItem';
import { useLocation } from 'react-router';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
	const currentLocation = useLocation();

	return (
		<ul>
			{movies.map(movie => (
				<MovieItem movie={movie} key={movie.id} state={currentLocation} />
			))}
		</ul>
	);
};

export default MovieList;
