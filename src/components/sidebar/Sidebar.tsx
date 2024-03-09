import { ReactComponent as SignOutIcon } from './assets/sign-out.svg';
import { NavMenu } from './components/nav-menu/NavMenu';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<NavMenu />
			<div className={styles.signOut}>
				<div className={styles.signOutIcon}>
					<SignOutIcon />
				</div>
				<div className={styles.signOutText}>Sign out</div>
			</div>
		</div>
	);
};
