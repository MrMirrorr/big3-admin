import styles from './ContentLayout.module.scss';

interface Props {
	topPanel?: React.ReactNode;
	children: React.ReactNode;
	pagination?: React.ReactNode;
}

export const ContentLayout = ({
	children = null,
	pagination = null,
	topPanel = null,
}: Props) => {
	return (
		<div className={styles.content}>
			{topPanel}
			<div className={styles.contentInner}>{children}</div>
			<div className={styles.pagination}>{pagination}</div>
		</div>
	);
};
