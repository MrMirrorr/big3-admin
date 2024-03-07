import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom';

export const Routes = () => {
	return (
		<BrowserRouter>
			<ReactRoutes>
				<Route path="/" element={<div>Главная страница</div>} />
				<Route path="/registration" element={<div>Регистрация</div>} />
			</ReactRoutes>
		</BrowserRouter>
	);
};
