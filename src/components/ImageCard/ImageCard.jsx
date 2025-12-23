import s from './ImageCard.module.css';

const ImageCard = ({ item, onCardClick }) => {
	const {
		urls: { small },
		alt_description,
	} = item;
	return (
		<li className={s.card} onClick={() => onCardClick(item)}>
			<img src={small} alt={alt_description} />
		</li>
	);
};

export default ImageCard;
