import { useNavigate } from 'react-router';
import { IOption } from '../../ui/sharedTypes';
import { useAppDispatch } from '../../store/store';
import { useGetAllTeamsQuery } from '../../api/requests/team';
import { setFilterByTeams } from '../../modules/ui/uiSlice';
import { useDebouncedSearch } from '../../hooks';
import { Button, SearchInput, MultiSelect } from '../../ui';
import styles from './TopPanel.module.scss';

interface Props {
	pageVariant: 'team' | 'player';
}

export const TopPanel = ({ pageVariant }: Props) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { searchTerm, setSearchTerm } = useDebouncedSearch();

	const { data: teams } = useGetAllTeamsQuery('');
	const teamOptions: IOption<string>[] =
		teams?.data.map((t) => ({ value: t.id.toString(), label: t.name })) || [];

	const handlerChangeFilterByTeams = (selectedValues: string[]) => {
		dispatch(setFilterByTeams(selectedValues));
	};

	const handlerClickAddBtn = () => {
		if (pageVariant === 'team') {
			navigate('/teams/manage');
		}

		if (pageVariant === 'player') {
			navigate('/players/manage');
		}
	};

	return (
		<div className={styles.topPanel}>
			<div className={styles.search}>
				<SearchInput
					placeholder="Search..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
			{pageVariant === 'player' && (
				<div className={styles.multiSelect}>
					<MultiSelect
						options={teamOptions}
						onChangeHandler={handlerChangeFilterByTeams}
					/>
				</div>
			)}
			<div className={styles.btn}>
				<Button onClick={handlerClickAddBtn}>Add +</Button>
			</div>
		</div>
	);
};
