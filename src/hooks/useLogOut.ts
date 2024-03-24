import { useAppDispatch } from '../store/store';
import { logOut } from '../modules/authorization/authorizationSlice';
import { displayToast } from '../modules/ui/uiThunk';
import { useDialog } from '../contexts/DialogContext';

export const useLogOut = () => {
	const dispatch = useAppDispatch();
	const { openDialog } = useDialog();

	const logOutHandler = () => {
		openDialog({
			title: 'Confirm action',
			text: 'Are you sure you want to log out of your account?',
			onConfirm: () => {
				dispatch(logOut());
				dispatch(displayToast('Successful logout', { variant: 'success' }));
			},
		});
	};

	return { logOutHandler };
};
