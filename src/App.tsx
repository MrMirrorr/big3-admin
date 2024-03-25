import { useAuthInitialization } from './hooks';
import { Routes } from './pages/routes';
import { Dialog, Toast } from './components';

export const App = () => {
	useAuthInitialization();

	return (
		<>
			<Routes />
			<Toast />
			<Dialog />
		</>
	);
};
