import { Link as RouterLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './Link.module.scss';

interface Props {
	children: React.ReactNode;
	to: string;
	disabled?: boolean;
}

export const Link = ({ children, to, disabled }: Props) => {
	const linkClasses = cn(styles.link, {
		[styles.disabled]: disabled,
	});

	return (
		<RouterLink className={linkClasses} to={disabled ? '' : to}>
			{children}
		</RouterLink>
	);
};
