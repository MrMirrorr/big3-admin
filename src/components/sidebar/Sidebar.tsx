import { useAppDispatch } from '../../store/store';
import { logOut } from '../../modules/authorization/authorizationSlice';
import { displayToast } from '../../modules/ui/uiThunk';
import { NavMenu } from './components/nav-menu/NavMenu';
import { ReactComponent as SignOutIcon } from './assets/sign-out.svg';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
	const dispatch = useAppDispatch();

	const logOutHandler = () => {
		dispatch(logOut());
		dispatch(displayToast('Successful logout', { variant: 'success' }));
	};

	return (
		<div className={styles.sidebar}>
			<NavMenu />
			<div className={styles.signOut} onClick={logOutHandler}>
				<div className={styles.signOutIcon}>
					<SignOutIcon />
				</div>
				<div className={styles.signOutText}>Sign out</div>
			</div>
		</div>
	);
};
