import { BrowserRouter, Route, Routes as ReactRoutes, Navigate } from 'react-router-dom';
import { PrivateRoute, WithAuthCheck } from '../components';
import { TeamRoutes } from './TeamRoutes';
import { AuthRoutes } from './AuthRoutes';
import { PlayerRoutes } from './PlayerRoutes';

export const Routes = () => {
	return (
		<BrowserRouter>
			<ReactRoutes>
				<Route path="/" element={<Navigate to="/auth/authorization" />} />
				<Route
					path="/auth/*"
					element={
						<WithAuthCheck>
							<AuthRoutes />
						</WithAuthCheck>
					}
				/>
				<Route
					path="/teams/*"
					element={
						<PrivateRoute>
							<TeamRoutes />
						</PrivateRoute>
					}
				/>
				<Route
					path="/players/*"
					element={
						<PrivateRoute>
							<PlayerRoutes />
						</PrivateRoute>
					}
				/>
			</ReactRoutes>
		</BrowserRouter>
	);
};
