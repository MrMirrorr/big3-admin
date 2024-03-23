import { useAppDispatch, useAppSelector } from '../../store/store';
import {
	selectFilters,
	selectPagination,
	selectSearch,
	setPage,
	setPageSize,
} from '../../modules/ui/uiSlice';
import { displayToast } from '../../modules/ui/uiThunk';
import { useGetAllPlayersQuery } from '../../api/requests/player';
import { IPlayerTeamNameResponse } from '../../api/dto/IPlayer';
import { useGetAllTeamsQuery } from '../../api/requests/team';
import { AppLayout, ContentLayout } from '../../layouts';
import { ReactComponent as EmptyImg } from '../../assets/icons/empty-players.svg';
import {
	CardsList,
	EmptyHere,
	PaginationPanel,
	Preloader,
	TopPanel,
	WarningMessage,
} from '../../components';
import { SmallPlayerCard } from './components/small-team-card/SmallPlayerCard';

export const Players = () => {
	const dispatch = useAppDispatch();
	const { value: searchValue } = useAppSelector(selectSearch);
	const { byTeams } = useAppSelector(selectFilters);
	const teamIdsQueryString = byTeams.map((id) => `&TeamIds=${id}`).join('');
	const { page, pageSize } = useAppSelector(selectPagination);
	const { data, isLoading, isFetching, isError } = useGetAllPlayersQuery(
		`Name=${searchValue}&Page=${page}&PageSize=${pageSize}${teamIdsQueryString}`,
	);
	const { data: teams } = useGetAllTeamsQuery('');

	const handlePageChange = (selectedPage: number) => {
		dispatch(setPage(selectedPage));
	};

	const handleChangePageCount = (selectedValue: number) => {
		dispatch(setPageSize(selectedValue));
	};

	if (isError) {
		dispatch(
			displayToast('Error loading teams data', {
				variant: 'error',
			}),
		);
	}

	const playersWithTeamNames: IPlayerTeamNameResponse[] | undefined = data?.data.map(
		(player) => {
			const team = teams?.data.find((team) => team.id === player.team);
			const teamName: string = team ? team.name : 'Unknown Team';
			return {
				...player,
				teamName,
			};
		},
	);

	return (
		<AppLayout>
			<ContentLayout
				topPanel={<TopPanel pageVariant="player" />}
				pagination={
					<PaginationPanel
						totalCount={data?.count}
						page={page}
						pageSize={pageSize}
						handlePageChange={handlePageChange}
						handleChangePageCount={handleChangePageCount}
					/>
				}
			>
				{isLoading || isFetching ? (
					<Preloader />
				) : isError ? (
					<WarningMessage message="Oops. Failed to load data from the server." />
				) : data?.data.length ? (
					<CardsList
						items={playersWithTeamNames}
						renderItem={(item) => (
							<SmallPlayerCard key={item?.id} {...item} />
						)}
					/>
				) : (
					<EmptyHere image={<EmptyImg />} text="Add new players to continue" />
				)}
			</ContentLayout>
		</AppLayout>
	);
};
