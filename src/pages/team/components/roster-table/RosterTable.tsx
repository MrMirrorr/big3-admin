import { RosterTableTitle } from './RosterTableTitle';
import { RosterTableHead } from './RosterTableHead';
import { RosterTableRow } from './RosterTableRow';
import { IPlayerResponse } from '../../../../api/dto/IPlayer';
import styles from './RosterTable.module.scss';

interface Props {
	players?: IPlayerResponse[];
}

export const RosterTable = ({ players }: Props) => {
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
