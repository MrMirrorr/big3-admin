import { IPlayer } from '../../../../api/dto/IPlayer';
import styles from './RosterTableRow.module.scss';

interface Props {
	players: IPlayer[];
}

export const RosterTableRow = ({ players = [] }: Props) => {
	return (
		<tbody className={styles.body}>
			{players &&
				players.map((player) => (
					<tr className={styles.row} key={player.id}>
						<td className={styles.number}>
							{player.number ? player.number : '-'}
						</td>
						<td className={styles.player}>
							<div className={styles.flex}>
								<div className={styles.left}>
									<img src={player.imageUrl} alt={player.name} />
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
						<td>{player.age}</td>
					</tr>
				))}
		</tbody>
	);
};
