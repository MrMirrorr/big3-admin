import { Link } from 'react-router-dom';
import { IPlayerTeamNameResponse } from '../../../../api/dto/IPlayer';
import styles from './SmallPlayerCard.module.scss';

export const SmallPlayerCard = ({
	id,
	name,
	number,
	avatarUrl,
	teamName,
}: IPlayerTeamNameResponse) => {
	return (
		<div className={styles.card}>
			<Link to={`/players/${id}`}>
				<div className={styles.top}>
					<img src={avatarUrl || ''} alt={name} />
				</div>
				<div className={styles.bottom}>
					<div className={styles.name}>
						{name} <span>#{number}</span>
					</div>
					<div className={styles.description}>{teamName}</div>
				</div>
			</Link>
		</div>
	);
};
