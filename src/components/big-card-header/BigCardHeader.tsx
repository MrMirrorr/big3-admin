import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import styles from './BigCardHeader.module.scss';

interface Props {
	title: string;
	isPlayer?: boolean;
}

export const BigCardHeader = ({ title = '', isPlayer = false }: Props) => {
	return (
		<div className={styles.controlPanel}>
			<div className={styles.breadcrumbs}>
				{isPlayer ? 'Players' : 'Teams'} / {title}
			</div>
			<div className={styles.controls}>
				<button className={styles.editBtn}>
					<EditIcon />
				</button>
				<button className={styles.deleteBtn}>
					<DeleteIcon />
				</button>
			</div>
		</div>
	);
};
