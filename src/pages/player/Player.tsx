import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import { displayToast } from '../../modules/ui/uiThunk';
import { AppLayout, ContentLayout } from '../../layouts';
import { useDeletePlayerMutation, useGetPlayerQuery } from '../../api/requests/player';
import { useDialog } from '../../contexts/DialogContext';
import { Preloader, WarningMessage } from '../../components';
import { BigCardPlayer } from './components/big-card-player/BigCardPlayer';

export const Player = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { id: playerId } = useParams();
	const { openDialog } = useDialog();
	const {
		data: player,
		isLoading: isGetPlayerLoading,
		isError,
	} = useGetPlayerQuery(`id=${playerId}`);
	const [deletePlayer, { isLoading: isDeleteLoading }] = useDeletePlayerMutation();
	const isLoading = isGetPlayerLoading || isDeleteLoading;

	const editPlayerHandler = (id: number) => {
		navigate(`/players/manage/${id}`);
	};

	const deletePlayerHandler = (id: number) => {
		openDialog({
			title: 'Confirm action',
			text: 'Remove a player?',
			onConfirm: async () => {
				try {
					const deletedPlayerDataResponse = await deletePlayer(id).unwrap();
					dispatch(
						displayToast('The player has been successfully deleted.', {
							variant: 'success',
						}),
					);
					navigate('/players');

					console.log('Deleted player data', deletedPlayerDataResponse);
				} catch (err) {
					console.log('Unknown delete player error', err);
					dispatch(
						displayToast('Unknown delete player error.', {
							variant: 'error',
						}),
					);
				}
			},
		});
	};

	return (
		<AppLayout>
			<ContentLayout isNoPaddingX>
				{isLoading ? (
					<Preloader />
				) : isError ? (
					<WarningMessage message="Oops. Failed to load data from the server." />
				) : player ? (
					<BigCardPlayer
						player={player}
						editPlayerHandler={editPlayerHandler}
						deletePlayerHandler={deletePlayerHandler}
						isDeleteLoading={isDeleteLoading}
					/>
				) : (
					<WarningMessage message="No content found." />
				)}
			</ContentLayout>
		</AppLayout>
	);
};
