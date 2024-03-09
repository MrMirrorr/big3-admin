import { SubmitHandler, useForm } from 'react-hook-form';
import { authValidationScheme } from '../../../../validation-schemes';
import { Button, Checkbox, Input, Link } from '../../../../ui';
import styles from './RegistrationForm.module.scss';

interface Props {
	title: string;
}

interface Inputs {
	name: string;
	login: string;
	password: string;
	confirm: string;
	accept: boolean;
}

export const RegistrationForm = ({ title }: Props) => {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
				<Button type="submit">Sign Up</Button>
				<div className={styles.message}>
					Already a member? <Link to="/authorization">Sign in</Link>
				</div>
			</form>
		</div>
	);
};
