import styles from './Notification.module.scss';

interface Props {
	children?: React.ReactNode;
}

export const Notification = ({ children }: Props) => {
	return <div className={styles.notification}>{children}</div>;
};
