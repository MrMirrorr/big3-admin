import { Route, Routes } from 'react-router-dom';
import { Registration } from './registration/Registration';
import { Authorization } from './authorization/Authorization';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="/registration" element={<Registration />} />
			<Route path="/authorization" element={<Authorization />} />
		</Routes>
	);
};
