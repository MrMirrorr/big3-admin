import { ReactComponent as ProfileIcon } from '../assets/profile.svg';
import styles from './Profile.module.scss';

interface Props {
	name: string | null;
}

export const Profile = ({ name = '' }: Props) => {
	return (
		<div className={styles.profile}>
			<div>{name}</div>
			<div>
				<ProfileIcon />
			</div>
		</div>
	);
};
