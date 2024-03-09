import { BigCardHeader } from '../big-card-header/BigCardHeader';
import styles from './BigCardTeam.module.scss';

interface Props {
	imgUrl: string;
	title: string;
	year: string;
	division: string;
	conference: string;
}

export const BigCardTeam = ({
	imgUrl = '',
	title = '',
	year = '',
	division = '',
	conference = '',
}: Props) => {
	return (
		<div className={styles.card}>
			<BigCardHeader title={title} />

			<div className={styles.info}>
				<div className={styles.image}>
					<img src={imgUrl} alt={title} />
				</div>
				<div className={styles.description}>
					<h1 className={styles.title}>{title}</h1>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Year of foundation</div>
						<div className={styles.value}>{year}</div>
					</div>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Division</div>
						<div className={styles.value}>{division}</div>
					</div>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Conference</div>
						<div className={styles.value}>{conference}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
