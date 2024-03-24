import { Route, Routes } from 'react-router-dom';
import { Teams } from './teams/Teams';
import { Team } from './team/Team';
import { ManageTeam } from './manage-team/ManageTeam';

export const TeamRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Teams />} />
			<Route path="/:id" element={<Team />} />
			<Route path="/manage" element={<ManageTeam pageVariant="add" />} />
			<Route path="/manage/:id" element={<ManageTeam pageVariant="edit" />} />
		</Routes>
	);
};
