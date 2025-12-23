import s from './SearchBar.module.css';
import { message } from '../../utils/message';
import { CiSearch } from 'react-icons/ci';

const SearchBar = ({ submitFn }) => {
	const handleSubmit = e => {
		e.preventDefault();
		const valueField = e.target.elements['search'].value.trim();
		if (!valueField) {
			message('Please enter text to search', 'info');
			return;
		}
		submitFn(valueField);
	};

	return (
		<>
			<header className={s.headerContainer}>
				<div className='container'>
					<form className={s.form} onSubmit={e => handleSubmit(e)}>
						<div className={s.inputThumb}>
							<div>
								<CiSearch />
							</div>
							<input
								type='text'
								autoComplete='off'
								autoFocus
								placeholder='Search images and photos'
								id='search'
								name='search'
							/>
						</div>

						<button type='submit'>Search</button>
					</form>
				</div>
			</header>
		</>
	);
};

export default SearchBar;
