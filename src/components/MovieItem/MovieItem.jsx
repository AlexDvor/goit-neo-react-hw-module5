import { Link } from 'react-router';
import s from './MovieItem.module.css';

const MovieItem = ({ movie }) => {
	const { title, id } = movie;
	return (
		<li className={s.card} onClick={() => console.log(id)}>
			<Link to={`/movies/${id}`}>{title}</Link>
		</li>
	);
};

export default MovieItem;
