import { RosterTableTitle } from './RosterTableTitle';
import { RosterTableHead } from './RosterTableHead';
import { RosterTableRow } from './RosterTableRow';
import { IPlayer } from '../../../../api/dto/IPlayer';
import styles from './RosterTable.module.scss';

const players: IPlayer[] = [
	{
		id: 101,
		number: 23,
		imageUrl: '/images/photo-big.png',
		name: 'John Doe',
		position: 'Forward',
		height: 190,
		weight: 89,
		age: 19,
	},
	{
		id: 102,
		number: 7,
		imageUrl: '/images/photo-big.png',
		name: 'Alice Smith',
		position: 'Guard',
		height: 175,
		weight: 70,
		age: 25,
	},
	{
		id: 103,
		number: 11,
		imageUrl: '/images/photo-big.png',
		name: 'Michael Johnson',
		position: 'Center',
		height: 205,
		weight: 100,
		age: 29,
	},
	{
		id: 104,
		number: null,
		imageUrl: '/images/photo-big.png',
		name: 'Emily Wilson',
		position: 'Forward',
		height: 183,
		weight: 80,
		age: 22,
	},
	{
		id: 105,
		number: 14,
		imageUrl: '/images/photo-big.png',
		name: 'Daniel Brown',
		position: 'Guard',
		height: 180,
		weight: 75,
		age: 27,
	},
	{
		id: 106,
		number: 3,
		imageUrl: '/images/photo-big.png',
		name: 'Jessica Taylor',
		position: 'Forward',
		height: 187,
		weight: 85,
		age: 24,
	},
	{
		id: 107,
		number: null,
		imageUrl: '/images/photo-big.png',
		name: 'Robert Davis',
		position: 'Guard',
		height: 178,
		weight: 72,
		age: 26,
	},
];

export const RosterTable = () => {
	return (
		<>
			<RosterTableTitle title="Roster" />
			<table className={styles.table}>
				<RosterTableHead />
				<RosterTableRow players={players} />
			</table>
		</>
	);
};
