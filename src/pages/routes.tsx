import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom';
import { Registration } from './registration/Registration';
import { Authorization } from './authorization/Authorization';
import { Teams } from './teams/Teams';

export const Routes = () => {
	return (
		<BrowserRouter>
			<ReactRoutes>
				<Route path="/" element={<div>Главная страница</div>} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/authorization" element={<Authorization />} />
				<Route path="/teams" element={<Teams />} />
			</ReactRoutes>
		</BrowserRouter>
	);
};
