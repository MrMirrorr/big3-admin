import cn from 'classnames';
import styles from './SmallCard.module.scss';

interface Props {
	imgUrl: string;
	title: string;
	description: string;
	number?: string;
	isPlayer?: boolean;
}

export const SmallCard = ({
	imgUrl = '',
	title = '',
	description = '',
	number = '',
	isPlayer = false,
}: Props) => {
	const cardClasses = cn(styles.card, {
		[styles.player]: isPlayer,
	});

	return (
		<div className={cardClasses}>
			<div className={styles.top}>
				<img src={imgUrl} alt={title} />
			</div>
			<div className={styles.bottom}>
				<div className={styles.title}>
					{title} <span>{number && number}</span>
				</div>
				<div className={styles.description}>{description}</div>
			</div>
		</div>
	);
};
