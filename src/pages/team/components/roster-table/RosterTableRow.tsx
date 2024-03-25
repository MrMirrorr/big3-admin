import { useNavigate } from 'react-router-dom';
import { IPlayerResponse } from '../../../../api/dto/IPlayer';
import { calculateAgeFromDateOfBirth } from '../../../../utils';
import styles from './RosterTableRow.module.scss';

interface Props {
	players?: IPlayerResponse[];
	isLoading: boolean;
}

export const RosterTableRow = ({ players = [], isLoading }: Props) => {
	const navigate = useNavigate();

	return (
		<tbody className={styles.body}>
			{isLoading ? (
				<tr>
					<td colSpan={5} className={styles.empty}>
						Loading ...
					</td>
				</tr>
			) : players && players.length ? (
				players.map((player) => (
					<tr
						className={styles.row}
						key={player.id}
						onClick={() => navigate(`/players/${player.id}`)}
					>
						<td className={styles.number}>
							{player.number ? player.number : '-'}
						</td>
						<td className={styles.player}>
							<div className={styles.flex}>
								<div className={styles.left}>
									<img src={player.avatarUrl || ''} alt={player.name} />
								</div>
								<div className={styles.right}>
									<div className={styles.name}>{player.name}</div>
									<div className={styles.position}>
										{player.position}
									</div>
								</div>
							</div>
						</td>
						<td>{player.height}</td>
						<td>{player.weight}</td>
						<td>{calculateAgeFromDateOfBirth(player.birthday || '')}</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan={5} className={styles.empty}>
						There are no players on this team yet.
					</td>
				</tr>
			)}
		</tbody>
	);
};
