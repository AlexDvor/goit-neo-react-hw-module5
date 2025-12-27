import { Link } from 'react-router';
import s from './MovieItem.module.css';

const MovieItem = ({ movie, state }) => {
	const { id, poster_path } = movie;
	return (
		<li className={s.card}>
			<Link to={`/movies/${id}`} state={state}>
				<div className={s.imageThumb}>
					<img src={`https://image.tmdb.org/t/p/w780${poster_path}`} />
				</div>
			</Link>
		</li>
	);
};

export default MovieItem;
