import { Link } from 'react-router';
import s from './MovieItem.module.css';

const MovieItem = ({ movie, state }) => {
	const { title, id } = movie;
	return (
		<li className={s.card}>
			<Link to={`/movies/${id}`} state={state}>
				{title}
			</Link>
		</li>
	);
};

export default MovieItem;
