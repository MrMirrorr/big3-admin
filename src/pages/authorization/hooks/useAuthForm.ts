import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../store/store';
import { useLoginMutation } from '../../../api/requests/authorization';
import { setCredentials } from '../../../modules/authorization/authorizationSlice';
import { displayToast } from '../../../modules/ui/uiThunk';

interface Inputs {
	login: string;
	password: string;
}

export const useAuthForm = () => {
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const [loginUser, { isLoading }] = useLoginMutation();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			const user = await loginUser({
				login: data.login,
				password: data.password,
			}).unwrap();
			dispatch(setCredentials(user));
			dispatch(displayToast(`Hello, ${user.name}!`, { variant: 'success' }));
		} catch (err: any) {
			if (err?.status && err?.status === 401) {
				console.log('User with the specified username / password was not found.');
				dispatch(
					displayToast(
						'User with the specified username / password was not found.',
						{ variant: 'error' },
					),
				);
			} else {
				console.log('Unknown authorization error', err);
			}
		}
	};

	return { register, handleSubmit, onSubmit, errors, isLoading };
};
