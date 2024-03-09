import { forwardRef } from 'react';
import cn from 'classnames';
import styles from './Checkbox.module.scss';

interface Props {
	id?: string;
	label?: string | React.ReactNode;
	name?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(
	(
		{
			id = '',
			label = '',
			name = '',
			disabled,
			error,
			errorMessage,
			...props
		}: Props,
		ref,
	) => {
		const inputClasses = cn(styles.checkbox, {
			[styles.disabled]: disabled,
			[styles.error]: error,
		});

		return (
			<div className={inputClasses}>
				<input
					type="checkbox"
					name={name}
					id={id}
					disabled={disabled}
					ref={ref}
					{...props}
				/>
				<label htmlFor={id}>{label}</label>
				{error && <div className={styles.errorMsg}>{errorMessage}</div>}
			</div>
		);
	},
);
