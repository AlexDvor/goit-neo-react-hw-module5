import { useEffect, useState, useMemo } from 'react';
import ContentLayout from '../../layout/ContentLayout';
import { useParams } from 'react-router';
import s from './MovieCast.module.css';
import API from '../../api_image';

const MovieCast = () => {
	const { movieId } = useParams();
	const [cast, setCast] = useState([]);

	useEffect(() => {
		if (!movieId) return;

		const fetchCast = async () => {
			try {
				const { cast } = await API.getCastByMovieId(movieId);
				setCast(cast || []);
			} catch (error) {
				setCast([]);
				console.log('🚀 ~ error:', error);
			}
		};

		fetchCast();
	}, [movieId]);

	const filteredCast = useMemo(() => cast.filter(item => item.profile_path), [cast]);

	return (
		<ContentLayout>
			{filteredCast.length > 0 && (
				<ul className={s.list}>
					{filteredCast.map(item => (
						<li key={item.id} className={s.card}>
							<div className={s.imageThumb}>
								<img
									src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
								/>
							</div>
							<p>{item.name}</p>
						</li>
					))}
				</ul>
			)}
		</ContentLayout>
	);
};

export default MovieCast;
