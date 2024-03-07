import cn from 'classnames';
import styles from './Button.module.scss';

interface Props {
	children?: React.ReactNode;
	variant?: 'primary' | 'secondary';
	disabled?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
	variant = 'primary',
	disabled = false,
	onClick,
	children,
}: Props) => {
	const buttonClasses = cn(styles.button, {
		[styles.secondary]: variant === 'secondary',
	});

	return (
		<button className={buttonClasses} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};
