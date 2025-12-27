import { Link } from 'react-router';
import s from './MovieItem.module.css';

const MovieItem = ({ movie, state }) => {
	const { id, poster_path, title } = movie;

	return (
		<li className={s.card}>
			<Link to={`/movies/${id}`} state={{ from: state }}>
				<div className={s.imageThumb}>
					<img
						src={`https://image.tmdb.org/t/p/w780${poster_path}`}
						alt={title}
					/>
				</div>
			</Link>
		</li>
	);
};

export default MovieItem;
