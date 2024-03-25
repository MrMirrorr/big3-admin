import cn from 'classnames';
import styles from './ContentLayout.module.scss';

interface Props {
	topPanel?: React.ReactNode;
	children: React.ReactNode;
	pagination?: React.ReactNode;
	isNoPaddingX?: boolean;
}

export const ContentLayout = ({
	children = null,
	pagination = null,
	topPanel = null,
	isNoPaddingX = false,
}: Props) => {
	const contentLayoutClasses = cn(styles.content, {
		[styles.noPaddingX]: isNoPaddingX,
	});

	return (
		<div className={contentLayoutClasses}>
			{topPanel}
			<div className={styles.contentInner}>{children}</div>
			<div className={styles.pagination}>{pagination}</div>
		</div>
	);
};
