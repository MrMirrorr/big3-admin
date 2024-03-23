import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import { displayToast } from '../../modules/ui/uiThunk';
import { AppLayout, ContentLayout } from '../../layouts';
import {
	useDeleteTeamMutation,
	useGetTeamPlayersQuery,
	useGetTeamQuery,
} from '../../api/requests/team';
import { Preloader, WarningMessage } from '../../components';
import { BigCardTeam } from './components/big-card-team/BigCardTeam';
import { RosterTable } from './components/roster-table/RosterTable';

export const Team = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { id: teamId } = useParams();
	const {
		data: team,
		isLoading: isGetTeamLoading,
		isError,
	} = useGetTeamQuery(`id=${teamId}`);
	const { data: playersObject } = useGetTeamPlayersQuery(`TeamIds=${teamId}`);
	const [deleteTeam, { isLoading: isDeleteLoading }] = useDeleteTeamMutation();
	const isLoading = isGetTeamLoading || isDeleteLoading;

	const editTeamHandler = (id: number) => {
		navigate(`/teams/manage/${id}`);
	};

	const deleteTeamHandler = async (id: number) => {
		try {
			const deletedTeamDataResponse = await deleteTeam(id).unwrap();
			dispatch(
				displayToast('The team has been successfully deleted.', {
					variant: 'success',
				}),
			);
			navigate('/teams');

			console.log('Deleted team data', deletedTeamDataResponse);
		} catch (err) {
			console.log('Unknown delete team error', err);
			dispatch(
				displayToast('Unknown delete team error.', {
					variant: 'error',
				}),
			);
		}
	};

	return (
		<AppLayout>
			<ContentLayout>
				{isLoading ? (
					<Preloader />
				) : isError ? (
					<WarningMessage message="Oops. Failed to load data from the server." />
				) : team ? (
					<>
						<BigCardTeam
							team={team}
							editTeamHandler={editTeamHandler}
							deleteTeamHandler={deleteTeamHandler}
							isDeleteLoading={isDeleteLoading}
						/>
						<RosterTable players={playersObject?.data} />
					</>
				) : (
					<WarningMessage message="No content found." />
				)}
			</ContentLayout>
		</AppLayout>
	);
};
