import { forwardRef, useState } from 'react';
import { ReactComponent as Eye } from '../../assets/icons/eye.svg';
import { ReactComponent as EyeOff } from '../../assets/icons/close_eye.svg';
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
			value = '',
			onChange = () => {},
			placeholder = '',
			disabled = false,
			error = false,
			errorMessage = '',
			label = '',
			id = '',
			name = '',
		},
		ref,
	) => {
		const [showPassword, setShowPassword] = useState(false);
		console.log('input');

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
				<div className={styles.inputContainer}>
					<input
						type={inputType}
						id={id}
						name={name}
						ref={ref}
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						disabled={disabled}
						className={inputClasses}
					/>
					{type === 'password' && (
						<button
							className={styles.visibilityToggle}
							onClick={togglePasswordVisibility}
							title={showPassword ? 'Hide password' : 'Show password'}
						>
							{showPassword ? <EyeOff /> : <Eye />}
						</button>
					)}
				</div>
				{error && <div className={styles.errorMsg}>{errorMessage}</div>}
			</div>
		);
	},
);
