import { useAppDispatch, useAppSelector } from '../../store/store';
import { displayToast } from '../../modules/ui/uiThunk';
import { useGetAllTeamsQuery } from '../../api/requests/team';
import { AppLayout } from '../../layouts/app-layout/AppLayout';
import { ContentLayout } from '../../layouts/content-layout/ContentLayout';
import { SmallTeamCard } from './components/small-team-card/SmallTeamCard';
import { CardsList, SmallCardSkeleton, TopPanel } from '../../components';
import { selectSearch } from '../../modules/ui/uiSlice';
import { memo } from 'react';

export const Teams = memo(() => {
	const dispatch = useAppDispatch();
	const { value: searchValue } = useAppSelector(selectSearch);
	const { data, isLoading, isError } = useGetAllTeamsQuery(`Name=${searchValue}`);

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
				pagination="pagination"
			>
				{isLoading ? (
					<CardsList
						items={[...Array(6)]}
						renderItem={(_, index) => <SmallCardSkeleton key={index} />}
					/>
				) : data?.data.length ? (
					<CardsList
						items={data.data}
						renderItem={(item) => <SmallTeamCard key={item?.id} {...item} />}
					/>
				) : (
					<div>Empty here</div>
				)}
			</ContentLayout>
		</AppLayout>
	);
});
