import { useState, useEffect } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { useParams } from 'react-router';
import s from './MovieDetailsPage.module.css';
import API from '../../api_image';

const MovieDetailsPage = () => {
	const [movie, setMovie] = useState(null);
	const { movieId } = useParams();

	useEffect(() => {
		const fetch = async () => {
			try {
				const data = await API.getMovieById(movieId);
				console.log('🚀 ~ data:', data);
				if (!data) return;
				setMovie(data);
			} catch (error) {
				console.log('🚀 ~ error:', error);
			}
		};
		fetch();
	}, [movieId]);

	return (
		<>
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
		</>
	);
};

export default MovieDetailsPage;
