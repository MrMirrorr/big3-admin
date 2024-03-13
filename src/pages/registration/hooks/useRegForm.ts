import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../store/store';
import { useRegisterMutation } from '../../../api/requests/authorization';
import { setCredentials } from '../../../modules/authorization/authorizationSlice';
import { displayToast } from '../../../modules/ui/uiThunk';

interface Inputs {
	name: string;
	login: string;
	password: string;
	confirm: string;
	accept: boolean;
}

export const useRegForm = () => {
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<Inputs>();

	const [registerUser, { isLoading }] = useRegisterMutation();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			const user = await registerUser({
				userName: data.name,
				login: data.login,
				password: data.password,
			}).unwrap();
			dispatch(setCredentials(user));
			dispatch(displayToast(`Hello, ${user.name}!`, { variant: 'success' }));
		} catch (err: any) {
			if (err?.originalStatus && err?.originalStatus === 409) {
				console.log('A user with the specified login already exists.');
				dispatch(
					displayToast('A user with the specified login already exists.', {
						variant: 'error',
					}),
				);
			} else {
				console.log('Unknown registration error', err);
			}
		}
	};

	return { register, handleSubmit, getValues, onSubmit, errors, isLoading };
};
