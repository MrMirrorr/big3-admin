import { useAppDispatch, useAppSelector } from '../../store/store';
import { selectPagination, selectSearch, setPage } from '../../modules/ui/uiSlice';
import { displayToast } from '../../modules/ui/uiThunk';
import { useGetAllTeamsQuery } from '../../api/requests/team';
import { AppLayout } from '../../layouts/app-layout/AppLayout';
import { ContentLayout } from '../../layouts/content-layout/ContentLayout';
import {
	CardsList,
	EmptyHere,
	Pagination,
	SmallCardSkeleton,
	TopPanel,
} from '../../components';
import { SmallTeamCard } from './components/small-team-card/SmallTeamCard';
import { ReactComponent as EmptyImg } from '../../assets/icons/empty-teams.svg';

export const Teams = () => {
	const dispatch = useAppDispatch();
	const { value: searchValue } = useAppSelector(selectSearch);
	const { page, pageSize } = useAppSelector(selectPagination);
	const { data, isLoading, isFetching, isError } = useGetAllTeamsQuery(
		`Name=${searchValue}&Page=${page}&PageSize=${pageSize}`,
	);

	if (isError) {
		dispatch(
			displayToast('Error loading data', {
				variant: 'error',
			}),
		);
	}

	return (
		<AppLayout>
			<ContentLayout
				topPanel={<TopPanel pageVariant="team" />}
				pagination={
					<Pagination
						totalCount={data?.count}
						page={page}
						pageSize={pageSize}
						onClickAction={(selectedPage) => dispatch(setPage(selectedPage))}
					/>
				}
			>
				{isLoading || isFetching ? (
					<CardsList
						items={[...Array(6)]}
						renderItem={(_, index) => <SmallCardSkeleton key={index} />}
					/>
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
