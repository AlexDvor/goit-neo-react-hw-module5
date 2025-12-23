import Modal from 'react-modal';
import { IoClose } from 'react-icons/io5';
import s from './ImageModal.module.css';

const ImageModal = ({ isOpen, onClose, children }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			className={s.modal}
			overlayClassName={s.overlay}
			contentLabel='Example Modal'
			closeTimeoutMS={200}
			ariaHideApp={false}
		>
			<button className={s.closeBtn} onClick={onClose} aria-label='Close modal'>
				<IoClose />
			</button>
			<div className={s.content}>{children}</div>
		</Modal>
	);
};

export default ImageModal;
