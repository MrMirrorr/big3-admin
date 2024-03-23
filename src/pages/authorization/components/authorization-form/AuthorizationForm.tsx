import { authorizationFormValidation } from './authorizationFormValidation';
import { useAuthForm } from '../../hooks/useAuthForm';
import { Button, Input, Link } from '../../../../ui';
import { Preloader } from '../../../../components';
import styles from './AuthorizationForm.module.scss';

interface Props {
	title: string;
}

export const AuthorizationForm = ({ title }: Props) => {
	const { register, handleSubmit, onSubmit, isLoading, errors } = useAuthForm();

	return isLoading ? (
		<Preloader />
	) : (
		<div className={styles.formBlock}>
			<h1 className={styles.title}>{title}</h1>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					label="Login"
					id="login"
					{...register('login', authorizationFormValidation.login)}
					error={Boolean(errors.login)}
					errorMessage={errors?.login?.message}
				/>
				<Input
					type="password"
					label="Password"
					id="password"
					{...register('password', authorizationFormValidation.password)}
					error={Boolean(errors.password)}
					errorMessage={errors?.password?.message}
				/>
				<Button type="submit" disabled={isLoading}>
					Sign In
				</Button>
				<div className={styles.message}>
					Not a member yet? <Link to="/registration">Sign up</Link>
				</div>
			</form>
		</div>
	);
};
