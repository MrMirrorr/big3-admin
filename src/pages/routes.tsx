import { BrowserRouter, Route, Routes as ReactRoutes, Navigate } from 'react-router-dom';
import { PrivateComponent, WithAuthCheck } from '../components';
import { Registration } from './registration/Registration';
import { Authorization } from './authorization/Authorization';
import { Teams } from './teams/Teams';

export const Routes = () => {
	return (
		<BrowserRouter>
			<ReactRoutes>
				<Route path="/" element={<Navigate to="/teams" replace />} />
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
			</ReactRoutes>
		</BrowserRouter>
	);
};
