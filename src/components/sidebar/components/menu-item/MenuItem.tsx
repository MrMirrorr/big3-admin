import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import styles from './MenuItem.module.scss';

interface Props {
	path: string;
	iconComponent: React.ReactNode;
	title: string;
}

export const MenuItem = ({ path = '', iconComponent = null, title = '' }: Props) => {
	const location = useLocation();

	const isActive = location.pathname === path;

	const menuItemClasses = cn(styles.menuItem, {
		[styles.active]: isActive,
	});

	return (
		<li className={menuItemClasses}>
			<Link to={path}>
				<div className={styles.menuIcon}>{iconComponent}</div>
				<div className={styles.menuTitle}>{title}</div>
			</Link>
		</li>
	);
};
