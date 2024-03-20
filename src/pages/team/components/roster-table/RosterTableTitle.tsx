import styles from './RosterTableTitle.module.scss';

interface Props {
	title: string;
}

export const RosterTableTitle = ({ title }: Props) => {
	return <div className={styles.title}>{title}</div>;
};
