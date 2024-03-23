import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import { displayToast } from '../../modules/ui/uiThunk';
import { ContentLayout } from '../../layouts/content-layout/ContentLayout';
import { AppLayout } from '../../layouts/app-layout/AppLayout';
import { useDeletePlayerMutation, useGetPlayerQuery } from '../../api/requests/player';
import { Preloader } from '../../components';
import { BigCardPlayer } from './components/big-card-player/BigCardPlayer';

export const Player = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { id: playerId } = useParams();
	const { data: player, isLoading, isError } = useGetPlayerQuery(`id=${playerId}`);
	const [deletePlayer, { isLoading: isDeleteLoading }] = useDeletePlayerMutation();

	const editPlayerHandler = (id: number) => {
		navigate(`/players/manage/${id}`);
	};

	const deletePlayerHandler = async (id: number) => {
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
	};

	return (
		<AppLayout>
			<ContentLayout>
				{isLoading ? (
					<Preloader />
				) : isError ? (
					<div style={{ color: 'red' }}>
						Oops. Failed to load data from the server.
					</div>
				) : player ? (
					<BigCardPlayer
						player={player}
						editPlayerHandler={editPlayerHandler}
						deletePlayerHandler={deletePlayerHandler}
						isDeleteLoading={isDeleteLoading}
					/>
				) : null}
			</ContentLayout>
		</AppLayout>
	);
};
