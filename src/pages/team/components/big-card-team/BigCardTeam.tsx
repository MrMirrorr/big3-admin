import { INewTeamResponse } from '../../../../api/dto/ITeam';
import { BigCardHeader } from '../../../../components/big-card-header/BigCardHeader';
import styles from './BigCardTeam.module.scss';

export const BigCardTeam = ({
	id = 940,
	imageUrl = '',
	name = 'Name',
	conference = 'conference',
	division = 'division',
	foundationYear = 1999,
}: INewTeamResponse) => {
	const crumbs = [
		{ text: 'Teams', url: '/teams' },
		{ text: name, url: `/teams/${id}` },
	];
	return (
		<div className={styles.card}>
			<BigCardHeader crumbs={crumbs} id={id} type="team" />

			<div className={styles.info}>
				<div className={styles.image}>
					<img src={imageUrl} alt={name} />
				</div>
				<div className={styles.description}>
					<h1 className={styles.title}>{name}</h1>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Year of foundation</div>
						<div className={styles.value}>{foundationYear}</div>
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
