import { closeSidebar } from '../../modules/ui/uiSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useBodyScrollLock, useLogOut } from '../../hooks';
import { NavMenu } from '../nav-menu/NavMenu';
import { Profile } from '../profile/Profile';
import { selectCurrentUser } from '../../modules/authorization/authorizationSlice';
import { SignOut } from '../sign-out/SignOut';
import cn from 'classnames';
import styles from './MobileSidebar.module.scss';

interface Props {
	isOpen: boolean;
}

export const MobileSidebar = ({ isOpen }: Props) => {
	useBodyScrollLock(isOpen);
	const dispatch = useAppDispatch();
	const { name } = useAppSelector(selectCurrentUser);
	const { logOutHandler } = useLogOut();

	const sidebarClasses = cn(styles.sidebar, {
		[styles.open]: isOpen,
	});

	return (
		<>
			{isOpen && (
				<div
					className={styles.overlay}
					onClick={() => dispatch(closeSidebar())}
				></div>
			)}
			<div className={sidebarClasses}>
				<Profile name={name} isMobile />
				<NavMenu isMobile />
				<SignOut logOutHandler={logOutHandler} isMobile />
			</div>
		</>
	);
};
