import { useAuthInitialization } from './hooks';
import { Routes } from './pages/Routes';
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
