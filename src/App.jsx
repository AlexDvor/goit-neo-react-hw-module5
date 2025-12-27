import { Routes, Route } from 'react-router';

import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
import Navigation from './components/Navigation/Navigation';

function App() {
	return (
		<>
			<Navigation />
			<div className='container'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/movies' element={<MoviesPage />} />
					<Route path='/movies/:movieId' element={<MovieDetailsPage />}>
						<Route path='cast' element={<MovieCast />} />
						<Route path='review' element={<MovieReviews />} />
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
