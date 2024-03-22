import { Link } from 'react-router-dom';
import { ITeamResponse } from '../../../../api/dto/ITeam';
import styles from './SmallTeamCard.module.scss';

export const SmallTeamCard = ({ id, imageUrl, name, foundationYear }: ITeamResponse) => {
	return (
		<div className={styles.card}>
			<Link to={`/teams/${id}`}>
				<div className={styles.top}>
					<img src={imageUrl || ''} alt={name} />
				</div>
				<div className={styles.bottom}>
					<div className={styles.name}>{name}</div>
					<div className={styles.description}>
						Year of foundation: {foundationYear}
					</div>
				</div>
			</Link>
		</div>
	);
};
