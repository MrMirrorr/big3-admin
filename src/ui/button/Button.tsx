import cn from 'classnames';
import styles from './Button.module.scss';

interface Props {
	children?: React.ReactNode;
	variant?: 'primary' | 'secondary';
	disabled?: boolean;
}

export const Button = ({ variant = 'primary', disabled = false, children }: Props) => {
	const buttonClasses = cn(styles.button, {
		[styles.secondary]: variant === 'secondary',
	});

	return (
		<button className={buttonClasses} disabled={disabled}>
			{children}
		</button>
	);
};
