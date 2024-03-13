import { Link } from 'react-router-dom';
import { Logo } from '../../ui';
import { Profile } from '../profile/Profile';
import styles from './Header.module.scss';
import { useAppSelector } from '../../store/store';
import { selectCurrentUser } from '../../modules/authorization/authorizationSlice';

export const Header = () => {
	const { name } = useAppSelector(selectCurrentUser);

	return (
		<header className={styles.header}>
			<Link to="/">
				<Logo />
			</Link>
			<Profile name={name} />
		</header>
	);
};
