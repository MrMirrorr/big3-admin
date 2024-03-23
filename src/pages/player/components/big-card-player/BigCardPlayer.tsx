import { IPlayerTeamNameResponse } from '../../../../api/dto/IPlayer';
import { BigCardHeader } from '../../../../components/big-card-header/BigCardHeader';
import { calculateAgeFromDateOfBirth } from '../../../../utils';
import styles from './BigCardPlayer.module.scss';

interface Props {
	player: IPlayerTeamNameResponse;
	editPlayerHandler: (id: number) => void;
	deletePlayerHandler: (id: number) => void;
	isDeleteLoading: boolean;
}

export const BigCardPlayer = ({
	player,
	editPlayerHandler,
	deletePlayerHandler,
	isDeleteLoading,
}: Props) => {
	const crumbs = [
		{ text: 'Players', url: '/players' },
		{ text: player.name, url: `/players/${player.id}` },
	];

	return (
		<div className={styles.card}>
			<BigCardHeader
				crumbs={crumbs}
				id={player.id}
				onEditHandler={editPlayerHandler}
				onDeleteHandler={deletePlayerHandler}
				isLoading={isDeleteLoading}
			/>

			<div className={styles.info}>
				<div className={styles.image}>
					<img src={player.avatarUrl || ''} alt={player.name} />
				</div>
				<div className={styles.description}>
					<h1 className={styles.title}>
						{player.name} <span>#{player.number}</span>
					</h1>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Position</div>
						<div className={styles.value}>{player.position}</div>
					</div>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Team</div>
						<div className={styles.value}>{player.teamName}</div>
					</div>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Height</div>
						<div className={styles.value}>{player.height}</div>
					</div>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Weight</div>
						<div className={styles.value}>{player.weight}</div>
					</div>
					<div className={styles.infoGroup}>
						<div className={styles.label}>Age</div>
						<div className={styles.value}>
							{calculateAgeFromDateOfBirth(player.birthday || '')}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
