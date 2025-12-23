import API from '../../api_image';
import { useEffect, useState } from 'react';

const HomePage = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const data = await API.getTrendingMovies();
				if (!data.results) return;

				setMovies(data.results);
				console.log('🚀 ~ data:', data);
			} catch (error) {
				console.log('🚀 ~ error:', error);
			}
		};

		fetchMovies();
	}, []);

	return (
		<>
			<h1>Tranding Movie</h1>
			{movies.length > 0 &&
				movies.map(movie => (
					<div key={movie.id}>
						<p>{movie.title}</p>
					</div>
				))}
		</>
	);
};

export default HomePage;
