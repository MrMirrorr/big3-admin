import { SmallCard } from '../../../../components';
import { ITeam } from '../../../../dto-mock/ITeam';

export const TeamCardsList = () => {
	const items: ITeam[] = [];

	return items.map((item) => (
		<SmallCard imgUrl={item.imageUrl} title={item.name} year={item.foundationYear} />
	));
};
