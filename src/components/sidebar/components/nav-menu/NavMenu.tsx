import { ReactComponent as GroupPersonIcon } from '../../assets/group_person.svg';
import { ReactComponent as PersonIcon } from '../../assets/person.svg';
import { MenuItem } from '../menu-item/MenuItem';
import styles from './NavMenu.module.scss';

export const NavMenu = () => {
	return (
		<nav className={styles.menu}>
			<ul className={styles.menuList}>
				<MenuItem
					path="/teams"
					iconComponent={<GroupPersonIcon />}
					title="Teams"
				/>
				<MenuItem
					path="/players"
					iconComponent={<PersonIcon />}
					title="Players"
				/>
			</ul>
		</nav>
	);
};
