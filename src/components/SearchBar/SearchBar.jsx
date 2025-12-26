import { useEffect, useState } from 'react';
import { message } from '../../utils/message';
import { CiSearch } from 'react-icons/ci';
import s from './SearchBar.module.css';

const SearchBar = ({ initialValue = '', submitFn }) => {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	const handleSubmit = e => {
		e.preventDefault();

		if (!value) {
			message('Please enter text to search', 'info');
			return;
		}

		submitFn(value);
	};

	return (
		<div className='container'>
			<form className={s.form} onSubmit={handleSubmit}>
				<div className={s.inputThumb}>
					<div>
						<CiSearch />
					</div>
					<input
						type='text'
						autoComplete='off'
						autoFocus
						placeholder='Search movie'
						name='search'
						value={value}
						onChange={e => setValue(e.target?.value?.trim())}
					/>
				</div>

				<button type='submit'>Search</button>
			</form>
		</div>
	);
};

export default SearchBar;
