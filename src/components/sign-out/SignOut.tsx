import { ReactComponent as SignOutIcon } from './sign-out.svg';
import cn from 'classnames';
import styles from './SignOut.module.scss';

interface Props {
	logOutHandler: () => void;
	isMobile?: boolean;
}

export const SignOut = ({ logOutHandler, isMobile = false }: Props) => {
	const signOutClasses = cn(styles.signOut, {
		[styles.isMobile]: isMobile,
	});

	return (
		<div className={signOutClasses} onClick={logOutHandler}>
			<div className={styles.signOutIcon}>
				<SignOutIcon />
			</div>
			<div className={styles.signOutText}>Sign out</div>
		</div>
	);
};
