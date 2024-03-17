import { BigCardHeader } from '../big-card-header/BigCardHeader';
import styles from './BigCardPlayer.module.scss';

interface Props {
	imgUrl: string;
	title: string;
	number: string;
	position: string;
	team: string;
	height: string;
	weight: string;
	age: string;
}

export const BigCardPlayer = ({
	imgUrl = '',
	title = '',
	number = '',
	position = '',
	team = '',
	height = '',
	weight = '',
	age = '',
}: Props) => {
	return (
		<div className={styles.card}>
			{/* <BigCardHeader title={title}  /> */}

			<div className={styles.info}>
				<div className={styles.image}>
					<img src={imgUrl} alt={title} />
				</div>
				<div className={styles.description}>
					<h1 className={styles.title}>
						{title} <span>{number}</span>
					</h1>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Position</div>
						<div className={styles.value}>{position}</div>
					</div>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Team</div>
						<div className={styles.value}>{team}</div>
					</div>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Height</div>
						<div className={styles.value}>{height}</div>
					</div>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Weight</div>
						<div className={styles.value}>{weight}</div>
					</div>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Age</div>
						<div className={styles.value}>{age}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
