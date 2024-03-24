import { ReactComponent as GroupPersonIcon } from './assets/group_person.svg';
import { ReactComponent as PersonIcon } from './assets/person.svg';
import { MenuItem } from './NavMenuItem';
import cn from 'classnames';
import styles from './NavMenu.module.scss';

interface Props {
	isMobile?: boolean;
}

export const NavMenu = ({ isMobile = false }: Props) => {
	const menuClasses = cn(styles.menu, {
		[styles.isMobile]: isMobile,
	});

	return (
		<nav className={menuClasses}>
			<ul className={styles.menuList}>
				<MenuItem
					path="/teams"
					iconComponent={<GroupPersonIcon />}
					title="Teams"
					isMobile={isMobile}
				/>
				<MenuItem
					path="/players"
					iconComponent={<PersonIcon />}
					title="Players"
					isMobile={isMobile}
				/>
			</ul>
		</nav>
	);
};
