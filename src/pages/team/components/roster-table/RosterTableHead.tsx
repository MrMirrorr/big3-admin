import styles from './RosterTableHead.module.scss';

export const RosterTableHead = () => {
	return (
		<thead className={styles.head}>
			<tr>
				<th>#</th>
				<th>Player</th>
				<th>Height</th>
				<th>Weight</th>
				<th>Age</th>
			</tr>
		</thead>
	);
};
