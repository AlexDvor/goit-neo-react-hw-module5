import { Routes, Route } from 'react-router';

import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';

import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
import Navigation from './components/Navigation/Navigation';

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/movies' element={<MoviesPage />} />
				<Route path='/movies/:movieId' element={<MovieDetailsPage />}>
					<Route path='/movies/:movieId/cast' element={<MovieCast />} />
					<Route path='/movies/:movieId/review' element={<MovieReviews />} />
				</Route>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</>
	);
}

export default App;
