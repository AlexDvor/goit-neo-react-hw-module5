import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ContentLayout from '../../layout/ContentLayout';
import API from '../../api_image';

const MovieReviews = () => {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		if (!movieId) return;

		const fetchCast = async () => {
			try {
				const { results } = await API.getReviewByMovieId(movieId);
				setReviews(results || []);
			} catch (error) {
				console.log('🚀 ~ error:', error);
			}
		};

		fetchCast();
	}, [movieId]);

	return (
		<ContentLayout>
			{reviews.length > 0 ? (
				<>
					<ul>
						{reviews.map(item => (
							<li key={item.id}>
								<p>{item.author}</p>
								<p>{item.content}</p>
							</li>
						))}
					</ul>
				</>
			) : (
				<></>
			)}
		</ContentLayout>
	);
};

export default MovieReviews;
