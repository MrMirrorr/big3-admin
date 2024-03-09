import { Logo } from '../../ui';
import { Profile } from '../profile/Profile';
import styles from './Header.module.scss';

interface Props {
	name: string;
}

export const Header = ({ name }: Props) => {
	return (
		<header className={styles.header}>
			<Logo />
			<Profile name={name} />
		</header>
	);
};
