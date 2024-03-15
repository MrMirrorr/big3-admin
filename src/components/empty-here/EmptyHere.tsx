import styles from './EmptyHere.module.scss';

interface Props {
	image: React.ReactNode;
	text: string;
}

export const EmptyHere = ({ image, text }: Props) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.empty}>
				<div className={styles.image}>{image}</div>
				<h1>Empty here</h1>
				<div className={styles.text}>{text}</div>
			</div>
		</div>
	);
};
