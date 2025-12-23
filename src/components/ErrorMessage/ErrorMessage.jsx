import s from './ErrorMessage.module.css';
const ErrorMessage = () => {
	return (
		<div className={s.wrap}>
			<p>Network error. Please check your connection and try again.</p>
		</div>
	);
};

export default ErrorMessage;
