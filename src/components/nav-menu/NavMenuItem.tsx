import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import { closeSidebar } from '../../modules/ui/uiSlice';
import cn from 'classnames';
import styles from './NavMenuItem.module.scss';

interface Props {
	path: string;
	iconComponent: React.ReactNode;
	title: string;
	isMobile?: boolean;
}

export const MenuItem = ({
	path = '',
	iconComponent = null,
	title = '',
	isMobile = false,
}: Props) => {
	const dispatch = useAppDispatch();
	const location = useLocation();

	const isActive = location.pathname.includes(path);

	const menuItemClasses = cn(styles.menuItem, {
		[styles.active]: isActive,
		[styles.isMobile]: isMobile,
	});

	return (
		<li className={menuItemClasses}>
			<Link to={path} onClick={() => dispatch(closeSidebar())}>
				<div className={styles.menuIcon}>{iconComponent}</div>
				<div className={styles.menuTitle}>{title}</div>
			</Link>
		</li>
	);
};
