import { useLogOut } from '../../hooks';
import { NavMenu } from '../nav-menu/NavMenu';
import { SignOut } from '../sign-out/SignOut';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
	const { logOutHandler } = useLogOut();

	return (
		<div className={styles.sidebar}>
			<NavMenu />
			<SignOut logOutHandler={logOutHandler} />
		</div>
	);
};
