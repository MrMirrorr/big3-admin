import { BrowserRouter, Route, Routes as ReactRoutes, Navigate } from 'react-router-dom';
import { PrivateComponent, WithAuthCheck } from '../components';
import { Registration } from './registration/Registration';
import { Authorization } from './authorization/Authorization';
import { Teams } from './teams/Teams';
import { ManageTeam } from './manage-team/ManageTeam';

export const Routes = () => {
	return (
		<BrowserRouter>
			<ReactRoutes>
				<Route path="/" element={<Authorization />} />
				<Route
					path="/registration"
					element={
						// <WithAuthCheck>
						<Registration />
						// </WithAuthCheck>
					}
				/>
				<Route
					path="/authorization"
					element={
						// <WithAuthCheck>
						<Authorization />
						// </WithAuthCheck>
					}
				/>
				<Route
					path="/teams"
					element={
						// <PrivateComponent>
						<Teams />
						// </PrivateComponent>
					}
				/>
				<Route
					path="/teams/add"
					element={
						// <PrivateComponent>
						<ManageTeam pageVariant="add" />
						// </PrivateComponent>
					}
				/>
			</ReactRoutes>
		</BrowserRouter>
	);
};
