import { ITeamResponse } from '../../../../api/dto/ITeam';
import { BigCardHeader } from '../../../../components/big-card-header/BigCardHeader';
import styles from './BigCardTeam.module.scss';

interface Props {
	team: ITeamResponse;
	editTeamHandler: (id: number) => void;
	deleteTeamHandler: (id: number) => void;
	isDeleteLoading: boolean;
}

export const BigCardTeam = ({
	team,
	editTeamHandler,
	deleteTeamHandler,
	isDeleteLoading,
}: Props) => {
	const crumbs = [
		{ text: 'Teams', url: '/teams' },
		{ text: team.name, url: `/teams/${team.id}` },
	];

	return (
		<div className={styles.card}>
			<BigCardHeader
				crumbs={crumbs}
				id={team.id}
				onEditHandler={editTeamHandler}
				onDeleteHandler={deleteTeamHandler}
				isLoading={isDeleteLoading}
			/>

			<div className={styles.info}>
				<div className={styles.image}>
					<img src={team.imageUrl || ''} alt={team.name} />
				</div>
				<div className={styles.description}>
					<h1 className={styles.title}>{team.name}</h1>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Year of foundation</div>
						<div className={styles.value}>{team.foundationYear}</div>
					</div>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Division</div>
						<div className={styles.value}>{team.division}</div>
					</div>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Conference</div>
						<div className={styles.value}>{team.conference}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
