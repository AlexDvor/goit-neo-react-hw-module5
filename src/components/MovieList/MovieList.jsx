import MovieItem from '../MovieItem/MovieItem';
import { useLocation } from 'react-router';
import ContentLayout from '../../layout/ContentLayout';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
	const currentLocation = useLocation();

	return (
		<ContentLayout>
			<ul className={s.list}>
				{movies.map(movie => (
					<MovieItem movie={movie} key={movie.id} state={currentLocation} />
				))}
			</ul>
		</ContentLayout>
	);
};

export default MovieList;
