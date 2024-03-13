import { authValidationScheme } from '../../../../validation-schemes';
import { useRegForm } from '../../hooks/useRegForm';
import { Button, Checkbox, Input, Link } from '../../../../ui';
import styles from './RegistrationForm.module.scss';

interface Props {
	title: string;
}

export const RegistrationForm = ({ title }: Props) => {
	const { register, handleSubmit, getValues, onSubmit, isLoading, errors } =
		useRegForm();

	return (
		<div className={styles.formBlock}>
			<h1 className={styles.title}>{title}</h1>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					label="Name"
					id="name"
					{...register('name', authValidationScheme.name)}
					error={Boolean(errors.name)}
					errorMessage={errors?.name?.message}
				/>
				<Input
					type="text"
					label="Login"
					id="login"
					{...register('login', authValidationScheme.login)}
					error={Boolean(errors.login)}
					errorMessage={errors?.login?.message}
				/>
				<Input
					type="password"
					label="Password"
					id="password"
					{...register('password', authValidationScheme.password)}
					error={Boolean(errors.password)}
					errorMessage={errors?.password?.message}
				/>
				<Input
					type="password"
					label="Enter your password again"
					id="confirm"
					{...register('confirm', {
						...authValidationScheme.confirm,
						validate: (value) => {
							const { password } = getValues();
							return password === value || 'Passwords should match!';
						},
					})}
					error={Boolean(errors.confirm)}
					errorMessage={errors?.confirm?.message}
				/>
				<Checkbox
					id="accept"
					label="I accept the agreement"
					{...register('accept', authValidationScheme.accept)}
					error={Boolean(errors.accept)}
					errorMessage={errors?.accept?.message}
				/>
				<Button type="submit" disabled={isLoading}>
					Sign Up
				</Button>
				<div className={styles.message}>
					Already a member? <Link to="/authorization">Sign in</Link>
				</div>
			</form>
		</div>
	);
};
