import { MainContainer } from '../../layouts';
import { ReactComponent as Image } from './404.svg';
import styles from './Page404.module.scss';

export const Page404 = () => {
	return (
		<MainContainer>
			<div className={styles.page}>
				<Image className={styles.image} />
				<div className={styles.title}>Page not found</div>
				<div className={styles.text}>
					Sorry, we can’t find what you’re looking for
				</div>
			</div>
		</MainContainer>
	);
};
