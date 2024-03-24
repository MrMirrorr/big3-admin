import { forwardRef, useState } from 'react';
import { ReactComponent as Eye } from './assets/eye.svg';
import { ReactComponent as EyeOff } from './assets/close_eye.svg';
import cn from 'classnames';
import styles from './Input.module.scss';

interface Props {
	type?: React.HTMLInputTypeAttribute;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: string;
	label?: string;
	name?: string;
	id?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
	(
		{
			type = 'text',
			placeholder = '',
			disabled = false,
			error = false,
			errorMessage = '',
			label = '',
			id = '',
			name = '',
			...props
		},
		ref,
	) => {
		const [showPassword, setShowPassword] = useState(false);

		const togglePasswordVisibility = () => {
			setShowPassword(!showPassword);
		};

		const inputType = showPassword ? 'text' : type;

		const inputClasses = cn(styles.input, {
			[styles.error]: error,
		});

		return (
			<div className={styles.wrapper}>
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
				{type === 'password' ? (
					<div className={styles.inputContainer}>
						<input
							type={inputType}
							id={id}
							name={name}
							ref={ref}
							placeholder={placeholder}
							disabled={disabled}
							className={inputClasses}
							{...props}
						/>
						<button
							type="button"
							className={styles.visibilityToggle}
							onClick={togglePasswordVisibility}
							title={showPassword ? 'Hide password' : 'Show password'}
						>
							{showPassword ? <Eye /> : <EyeOff />}
						</button>
					</div>
				) : (
					<input
						type={inputType}
						id={id}
						name={name}
						ref={ref}
						placeholder={placeholder}
						disabled={disabled}
						className={inputClasses}
						{...props}
					/>
				)}
				{error && <div className={styles.errorMsg}>{errorMessage}</div>}
			</div>
		);
	},
);
