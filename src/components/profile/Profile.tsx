import { ReactComponent as ProfileIcon } from './profile.svg';
import cn from 'classnames';
import styles from './Profile.module.scss';

interface Props {
	name: string | null;
	isMobile?: boolean;
}

export const Profile = ({ name = '', isMobile = false }: Props) => {
	const profileClasses = cn(styles.profile, {
		[styles.isMobile]: isMobile,
	});

	return (
		<div className={profileClasses}>
			<div className={styles.name}>{name}</div>
			<div className={styles.icon}>
				<ProfileIcon />
			</div>
		</div>
	);
};
