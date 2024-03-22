import { Link } from 'react-router-dom';
import { IPlayerResponse } from '../../../../api/dto/IPlayer';
import styles from './SmallPlayerCard.module.scss';

export const SmallPlayerCard = ({
	id,
	name,
	number,
	avatarUrl,
	team,
}: IPlayerResponse) => {
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
					<div className={styles.description}>{team}</div>
				</div>
			</Link>
		</div>
	);
};
