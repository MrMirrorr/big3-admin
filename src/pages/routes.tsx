import { BrowserRouter, Route, Routes as ReactRoutes, Navigate } from 'react-router-dom';
import { PrivateComponent, WithAuthCheck } from '../components';
import { Registration } from './registration/Registration';
import { Authorization } from './authorization/Authorization';
import { Teams } from './teams/Teams';
import { ManageTeam } from './manage-team/ManageTeam';
import { Team } from './team/Team';

export const Routes = () => {
	return (
		<BrowserRouter>
			<ReactRoutes>
				<Route path="/" element={<Navigate to="authorization" />} />
				<Route
					path="/registration"
					element={
						<WithAuthCheck>
							<Registration />
						</WithAuthCheck>
					}
				/>
				<Route
					path="/authorization"
					element={
						<WithAuthCheck>
							<Authorization />
						</WithAuthCheck>
					}
				/>
				<Route
					path="/teams"
					element={
						<PrivateComponent>
							<Teams />
						</PrivateComponent>
					}
				/>
				<Route
					path="/teams/manage"
					element={
						<PrivateComponent>
							<ManageTeam pageVariant="add" />
						</PrivateComponent>
					}
				/>
				<Route
					path="/teams/manage/:id"
					element={
						<PrivateComponent>
							<ManageTeam pageVariant="edit" />
						</PrivateComponent>
					}
				/>
				<Route
					path="/teams/:id"
					element={
						<PrivateComponent>
							<Team />
						</PrivateComponent>
					}
				/>
			</ReactRoutes>
		</BrowserRouter>
	);
};
