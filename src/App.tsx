import { useAuthInitialization } from './hooks/useAuthInitialization';
import { Routes } from './pages/routes';
import { Toast } from './components';

export const App = () => {
	useAuthInitialization();

	return (
		<>
			<Routes />
			<Toast />
		</>
	);
};
