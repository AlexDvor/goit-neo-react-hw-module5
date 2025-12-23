import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ list, onCardClick }) => {
	return (
		<div className='container'>
			<ul className={s.grid}>
				{list.map((item, index) => (
					<ImageCard item={item} key={index} onCardClick={onCardClick} />
				))}
			</ul>
		</div>
	);
};

export default ImageGallery;
