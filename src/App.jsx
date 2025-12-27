import { Routes, Route } from 'react-router';
import { lazy } from 'react';
import { Suspense } from 'react';
import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));

function App() {
	return (
		<>
			<Navigation />
			<Suspense fallback={<Loader />}>
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
			</Suspense>
		</>
	);
}

export default App;
