import cn from 'classnames';
import styles from './Button.module.scss';

interface Props {
	type?: 'button' | 'submit';
	children?: React.ReactNode;
	variant?: 'primary' | 'secondary';
	disabled?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
	type = 'button',
	variant = 'primary',
	disabled = false,
	onClick,
	children,
}: Props) => {
	const buttonClasses = cn(styles.button, {
		[styles.secondary]: variant === 'secondary',
	});

	return (
		<button
			type={type}
			className={buttonClasses}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
