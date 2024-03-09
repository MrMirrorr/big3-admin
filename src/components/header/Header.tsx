import { Link } from 'react-router-dom';
import { Logo } from '../../ui';
import { Profile } from '../profile/Profile';
import styles from './Header.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link to="/">
				<Logo />
			</Link>
			<Profile name="John Doe" />
		</header>
	);
};
