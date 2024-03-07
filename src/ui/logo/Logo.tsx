import { ReactComponent as LogoImage } from '../../assets/icons/logo.svg';
import styles from './Logo.module.scss';

export const Logo = () => {
	return (
		<div className={styles.logo}>
			<LogoImage />
		</div>
	);
};
