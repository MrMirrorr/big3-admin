import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContentLayout } from '../../layouts/content-layout/ContentLayout';
import { AppLayout } from '../../layouts/app-layout/AppLayout';
import { useAppDispatch } from '../../store/store';
import { useGetTeamQuery } from '../../api/requests/team';
import { setTeam } from '../../modules/team/teamSlice';
import { BigCardTeam } from '../../components';
import { RosterTable } from './components/roster-table/RosterTable';

export const Team = () => {
	const dispatch = useAppDispatch();
	const { id: teamId } = useParams();
	const { data: team, isLoading, isError, isSuccess } = useGetTeamQuery(`id=${teamId}`);

	useEffect(() => {
		if (isSuccess && team) {
			dispatch(setTeam(team));
		}
	}, [team, isSuccess, dispatch]);

	return (
		<AppLayout>
			<ContentLayout>
				{/* {isLoading ? (
					<div>Loading ...</div>
				) : isError ? (
					<div style={{ color: 'red' }}>
						Oops. Failed to load data from the server.
					</div>
				) : team ? ( */}
				<BigCardTeam
					// {...team}
					id={940}
					imageUrl=""
					name="Name"
					conference="conference"
					division="division"
					foundationYear={1999}
				/>
				{/* // ) : null} */}
				<RosterTable />
			</ContentLayout>
		</AppLayout>
	);
};
