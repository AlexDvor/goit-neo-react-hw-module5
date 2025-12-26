import { useState, useEffect } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { Outlet, useParams } from 'react-router';
import { Link } from 'react-router';
import { useLocation } from 'react-router';

import API from '../../api_image';
import s from './MovieDetailsPage.module.css';
import { useNavigate } from 'react-router';

const MovieDetailsPage = () => {
	const [movie, setMovie] = useState(null);
	const { movieId } = useParams();
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (!movieId) return;
		const fetch = async () => {
			try {
				const data = await API.getMovieById(movieId);

				if (!data) return;
				setMovie(data);
			} catch (error) {
				console.log('🚀 ~ error:', error);
			}
		};
		fetch();
	}, [movieId]);

	const handleBack = () => {
		if (!location) return;
		navigate(location.state);
	};
	return (
		<>
			<button onClick={handleBack}>Go back</button>
			{movie && (
				<div className={s.container}>
					<div className={s.imageThumb}>
						<img
							src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
						/>
					</div>
					<div>
						<h2>{movie.title}</h2>
						<ProgressBar rating={movie.vote_average} />
						<p>Overview</p>
						<p>{movie.overview}</p>
						<p>Genres</p>
						{movie.genres?.length > 0 && (
							<ul>
								{movie.genres.map(item => (
									<li key={item.id}>{item.name}</li>
								))}
							</ul>
						)}
					</div>
				</div>
			)}

			<Link to='cast'>Cast</Link>
			<br />
			<Link to='review'>Reviews</Link>
			<Outlet />
		</>
	);
};

export default MovieDetailsPage;
