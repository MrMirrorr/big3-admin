import { Route, Routes } from 'react-router-dom';
import { Players } from './players/Players';
import { Player } from './player/Player';
import { ManagePlayer } from './manage-player/ManagePlayer';

export const PlayerRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Players />} />
			<Route path="/:id" element={<Player />} />
			<Route path="/manage" element={<ManagePlayer pageVariant="add" />} />
			<Route path="/manage/:id" element={<ManagePlayer pageVariant="edit" />} />
		</Routes>
	);
};
