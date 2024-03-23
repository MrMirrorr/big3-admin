import styles from './WarningMessage.module.scss';

interface Props {
	message: string;
}

export const WarningMessage = ({ message }: Props) => {
	return <div className={styles.warning}>{message}</div>;
};
