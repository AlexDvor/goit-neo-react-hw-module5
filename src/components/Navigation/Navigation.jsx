import { NavLink } from 'react-router';
import s from './Navigation.module.css';

const Navigation = () => {
	const isActive = ({ isActive }) => (isActive ? s.active : '');

	return (
		<header className={s.header}>
			<nav className={`${s.navContainer} container`}>
				<ul className={s.navList}>
					<li>
						<NavLink className={isActive} to='/'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className={isActive} to='/movies/'>
							Movies
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
