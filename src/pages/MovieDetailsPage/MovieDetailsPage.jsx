import { useState, useEffect } from 'react';
import ScoreBar from '../../components/ScoreBar/ScoreBar';
import { Outlet, useParams } from 'react-router';
import { Link, NavLink } from 'react-router';
import { useLocation } from 'react-router';
import ContentLayout from '../../layout/ContentLayout';
import { IoReturnUpBackOutline } from 'react-icons/io5';

import API from '../../api_image';
import s from './MovieDetailsPage.module.css';
import { useNavigate } from 'react-router';

const MovieDetailsPage = () => {
	const [movie, setMovie] = useState(null);
	const { movieId } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const backLinkHref = location.state?.from ?? '/movies';

	const isActive = ({ isActive }) => (isActive ? s.active : '');
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
		navigate(backLinkHref);
	};
	return (
		<>
			<ContentLayout>
				<button type='button' className={s.btnBack} onClick={handleBack}>
					<IoReturnUpBackOutline />
					<span>Go back</span>
				</button>
				{movie && (
					<div className={s.container}>
						<div className={s.imageThumb}>
							<img
								src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
								alt={movie.title}
							/>
						</div>
						<div>
							<h2>{movie.title}</h2>
							<ScoreBar rating={movie.vote_average} />
							<p>Overview</p>
							<p>{movie.overview}</p>
							<p>Genres</p>
							{movie.genres?.length > 0 && (
								<ul className={s.genresList}>
									{movie.genres.map(item => (
										<li key={item.id}>{item.name}</li>
									))}
								</ul>
							)}
						</div>
					</div>
				)}
			</ContentLayout>

			<ContentLayout>
				<div className={s.linkList}>
					<NavLink className={isActive} to='cast'>
						Cast
					</NavLink>
					<NavLink className={isActive} to='review'>
						Reviews
					</NavLink>
				</div>
			</ContentLayout>

			<Outlet />
		</>
	);
};

export default MovieDetailsPage;
