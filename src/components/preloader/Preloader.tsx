import { ReactComponent as BallIcon } from './ball.svg';
import styles from './Preloader.module.scss';

export const Preloader = () => {
	return <BallIcon className={styles.preloader} />;
};
