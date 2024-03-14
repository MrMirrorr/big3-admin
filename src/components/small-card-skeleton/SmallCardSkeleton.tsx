import styles from './SmallCardSkeleton.module.scss';

export const SmallCardSkeleton = () => {
	return (
		<div className={styles.card}>
			<div className={styles.top}></div>
			<div className={styles.bottom}>
				<div className={styles.name}></div>
				<div className={styles.description}></div>
			</div>
		</div>
	);
};
