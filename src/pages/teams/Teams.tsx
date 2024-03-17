import { useAppDispatch, useAppSelector } from '../../store/store';
import {
	selectPagination,
	selectSearch,
	setPage,
	setPageSize,
} from '../../modules/ui/uiSlice';
import { displayToast } from '../../modules/ui/uiThunk';
import { useGetAllTeamsQuery } from '../../api/requests/team';
import { AppLayout } from '../../layouts/app-layout/AppLayout';
import { ContentLayout } from '../../layouts/content-layout/ContentLayout';
import { CardsList, EmptyHere, PaginationPanel, TopPanel } from '../../components';
import { SmallTeamCard } from './components/small-team-card/SmallTeamCard';
import { ReactComponent as EmptyImg } from '../../assets/icons/empty-teams.svg';

export const Teams = () => {
	const dispatch = useAppDispatch();
	const { value: searchValue } = useAppSelector(selectSearch);
	const { page, pageSize } = useAppSelector(selectPagination);
	const { data, isLoading, isFetching, isError } = useGetAllTeamsQuery(
		`Name=${searchValue}&Page=${page}&PageSize=${pageSize}`,
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
				topPanel={<TopPanel pageVariant="team" />}
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
						renderItem={(item) => <SmallTeamCard key={item?.id} {...item} />}
					/>
				) : (
					<EmptyHere image={<EmptyImg />} text="Add new teams to continue" />
				)}
			</ContentLayout>
		</AppLayout>
	);
};
