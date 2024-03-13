import { useLayoutEffect } from 'react';
import { ILoginResponse } from '../api/dto/IAuthorization';
import { useAppDispatch } from '../store/store';
import { setCredentials } from '../modules/authorization/authorizationSlice';
import { displayToast } from '../modules/ui/uiThunk';

export const useAuthInitialization = () => {
	const dispatch = useAppDispatch();
	const user: ILoginResponse = JSON.parse(localStorage.getItem('user') || '{}');

	useLayoutEffect(() => {
		const initializeAuth = () => {
			if (Object.keys(user).length) {
				dispatch(setCredentials(user));
				dispatch(displayToast(`Hello, ${user.name}!`, { variant: 'success' }));
			}
		};

		initializeAuth();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
