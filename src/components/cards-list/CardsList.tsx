import { IPlayerResponse } from '../../api/dto/IPlayer';
import { ITeamResponse } from '../../api/dto/ITeam';
import styles from './CardsList.module.scss';

interface Props<T> {
	items?: T[];
	renderItem: (item: T, index?: number) => JSX.Element;
}

export const CardsList = <T extends ITeamResponse | IPlayerResponse>({
	items,
	renderItem,
}: Props<T>) => {
	return (
		<div className={styles.cardsList}>
			{items?.map((item, index) => renderItem(item, index))}
		</div>
	);
};
