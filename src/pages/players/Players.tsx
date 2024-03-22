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
import { AppLayout } from '../../layouts/app-layout/AppLayout';
import { ContentLayout } from '../../layouts/content-layout/ContentLayout';
import { CardsList, EmptyHere, PaginationPanel, TopPanel } from '../../components';
import { SmallPlayerCard } from './components/small-team-card/SmallPlayerCard';
import { ReactComponent as EmptyImg } from '../../assets/icons/empty-teams.svg';

export const Players = () => {
	const dispatch = useAppDispatch();
	const { value: searchValue } = useAppSelector(selectSearch);
	const { byTeams } = useAppSelector(selectFilters);
	const teamIdsQueryString = byTeams.map((id) => `&TeamIds=${id}`).join('');
	const { page, pageSize } = useAppSelector(selectPagination);
	const { data, isLoading, isFetching, isError } = useGetAllPlayersQuery(
		`Name=${searchValue}&Page=${page}&PageSize=${pageSize}${teamIdsQueryString}`,
	);

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
					<div>Loading ...</div>
				) : isError ? (
					<div style={{ color: 'red' }}>
						Oops. Failed to load data from the server.
					</div>
				) : data?.data.length ? (
					<CardsList
						items={data.data}
						renderItem={(item) => (
							<SmallPlayerCard key={item?.id} {...item} />
						)}
					/>
				) : (
					<EmptyHere image={<EmptyImg />} text="Add new teams to continue" />
				)}
			</ContentLayout>
		</AppLayout>
	);
};
