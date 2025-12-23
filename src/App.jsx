import 'modern-normalize/modern-normalize.css';

import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';

import { message } from './utils/message';
import API from './api_image';

function App() {
	const [collection, setCollection] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchField, setSearchField] = useState('');
	const [totalPages, setTotalPages] = useState(0);
	const [error, setError] = useState(false);
	const [page, setPage] = useState(1);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	useEffect(() => {
		if (!searchField) return;
		const fetch = async () => {
			try {
				setError(false);
				setIsLoading(true);
				const data = await API.getPhotoBySearch(page, searchField);

				setTotalPages(data.total_pages);
				setCollection(prev =>
					page === 1 ? data.results : [...prev, ...data.results]
				);
			} catch (error) {
				setError(true);
				message(`Failed to load images : ${error.message}}`, 'error');
			} finally {
				setIsLoading(false);
			}
		};

		fetch();
	}, [page, searchField]);

	const handleSubmitSearch = value => {
		if (searchField === value) {
			return message('Please enter another text to search', 'warning');
		}
		setSearchField(value);
		setPage(1);
		setCollection([]);
		setTotalPages(0);
	};

	const handleLoadMoreBtn = () => {
		setPage(prev => prev + 1);
	};

	const handleClickCard = image => {
		if (!image) return;
		const {
			urls: { full },
			alt_description,
		} = image;
		setSelectedImage({ full, alt_description });
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
		setSelectedImage(null);
	};

	return (
		<>
			<SearchBar submitFn={handleSubmitSearch} />
			{collection.length > 0 && (
				<ImageGallery list={collection} onCardClick={handleClickCard} />
			)}
			{page < totalPages && <LoadMoreBtn onClick={handleLoadMoreBtn} />}
			{error && <ErrorMessage />}
			<ImageModal isOpen={modalIsOpen} onClose={closeModal}>
				{selectedImage && (
					<img src={selectedImage.full} alt={selectedImage.alt_description} />
				)}
			</ImageModal>
			<Loader isLoading={isLoading} />
		</>
	);
}

export default App;
