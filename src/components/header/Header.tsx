import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { selectCurrentUser } from '../../modules/authorization/authorizationSlice';
import { closeSidebar, openSidebar, selectSidebar } from '../../modules/ui/uiSlice';
import { Logo } from './logo/Logo';
import { Profile } from './profile/Profile';
import { ReactComponent as BurgerIcon } from './assets/burger.svg';
import styles from './Header.module.scss';

export const Header = () => {
	const dispatch = useAppDispatch();
	const { name } = useAppSelector(selectCurrentUser);
	const { isOpen } = useAppSelector(selectSidebar);

	const toggleSidebar = () => {
		isOpen ? dispatch(closeSidebar()) : dispatch(openSidebar());
	};

	return (
		<header className={styles.header}>
			<BurgerIcon className={styles.burgerIcon} onClick={toggleSidebar} />
			<Link to="/">
				<Logo />
			</Link>
			<Profile name={name} />
		</header>
	);
};
