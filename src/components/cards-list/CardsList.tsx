import { ITeamResponse } from '../../api/dto/ITeam';
import styles from './CardsList.module.scss';

interface Props {
	items?: ITeamResponse[];
	renderItem: (item: ITeamResponse, index?: number) => JSX.Element;
}

export const CardsList = ({ items, renderItem }: Props) => {
	return (
		<div className={styles.cardsList}>
			{items?.map((item, index) => renderItem(item, index))}
		</div>
	);
};
