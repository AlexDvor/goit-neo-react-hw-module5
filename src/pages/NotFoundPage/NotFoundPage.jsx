import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};
	return (
		<div className={s.box}>
			<p className={s.ms}>NotFoundPage</p>
			<button type='button' className={s.btn} onClick={handleClick}>
				<IoReturnUpBackOutline />
				<span>Go Home</span>
			</button>
		</div>
	);
};

export default NotFoundPage;
