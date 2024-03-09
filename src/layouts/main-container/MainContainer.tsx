import styles from './MainContainer.module.scss';

interface Props {
	children: React.ReactNode;
}

export const MainContainer = ({ children }: Props) => {
	return <div className={styles.container}>{children}</div>;
};
