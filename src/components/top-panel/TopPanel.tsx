import { useState } from 'react';
import { IPositionOption } from '../../dto-mock/IPositionOption';
import { Button, MultiSelect, SearchInput } from '../../ui';
import styles from './TopPanel.module.scss';
import { MultiValue } from 'react-select';
import { useNavigate } from 'react-router';

interface Props {
	pageVariant: 'team' | 'player';
	filterOptions?: IPositionOption[];
}

export const TopPanel = ({ pageVariant = 'team', filterOptions = [] }: Props) => {
	const navigate = useNavigate();

	const [currentPositions, setCurrentPositions] = useState(['']);

	const getValues = () => {
		return currentPositions
			? filterOptions.filter((o) => currentPositions.indexOf(o.value) >= 0)
			: [];
	};

	const onChangeMulti = (newValue: MultiValue<'' | IPositionOption>) => {
		setCurrentPositions(newValue.map((v: any) => v.value));
	};

	const handlerClickAddBtn = () => {
		if (pageVariant === 'team') {
			navigate('/teams/add');
		}

		if (pageVariant === 'player') {
			navigate('players/add');
		}
	};

	return (
		<div className={styles.topPanel}>
			<div className={styles.search}>
				<SearchInput placeholder="Search..." />
			</div>
			{pageVariant === 'player' && (
				<div className={styles.multiSelect}>
					<MultiSelect
						options={filterOptions}
						value={getValues()}
						onChange={onChangeMulti}
					/>
				</div>
			)}
			<div className={styles.btn}>
				<Button onClick={handlerClickAddBtn}>Add +</Button>
			</div>
		</div>
	);
};
