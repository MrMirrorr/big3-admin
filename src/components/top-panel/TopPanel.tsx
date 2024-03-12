import { useState } from 'react';
import { IPositionOption } from '../../dto-mock/IPositionOption';
import { Button, MultiSelect, SearchInput } from '../../ui';
import styles from './TopPanel.module.scss';
import { MultiValue } from 'react-select';

interface Props {
	isPlayersPage?: boolean;
	filterOptions?: IPositionOption[];
}

export const TopPanel = ({ isPlayersPage = false, filterOptions = [] }: Props) => {
	const [currentPositions, setCurrentPositions] = useState(['']);

	const getValues = () => {
		return currentPositions
			? filterOptions.filter((o) => currentPositions.indexOf(o.value) >= 0)
			: [];
	};

	const onChangeMulti = (newValue: MultiValue<'' | IPositionOption>) => {
		setCurrentPositions(newValue.map((v: any) => v.value));
	};

	return (
		<div className={styles.topPanel}>
			<div className={styles.search}>
				<SearchInput placeholder="Search..." />
			</div>
			{isPlayersPage && (
				<div className={styles.multiSelect}>
					<MultiSelect
						options={filterOptions}
						value={getValues()}
						onChange={onChangeMulti}
					/>
				</div>
			)}
			<div className={styles.btn}>
				<Button>Add +</Button>
			</div>
		</div>
	);
};
