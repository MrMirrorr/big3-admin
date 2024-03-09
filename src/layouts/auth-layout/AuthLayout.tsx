import styles from './AuthLayout.module.scss';

interface Props {
	form: React.ReactNode;
	img: React.ReactNode;
}

export const AuthLayout = ({ form, img }: Props) => {
	return (
		<div className={styles.authLayout}>
			<div className={styles.left}>{form}</div>
			<div className={styles.right}>{img}</div>
		</div>
	);
};
