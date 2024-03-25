import { ReactComponent as DeleteIcon } from './assets/delete.svg';
import { ReactComponent as EditIcon } from './assets/edit.svg';
import styles from './BigCardHeaderControls.module.scss';

interface Props {
	onEditHandler: () => void;
	onDeleteHandler: () => void;
	isLoading: boolean;
}

export const BigCardHeaderControls = ({
	onEditHandler,
	onDeleteHandler,
	isLoading,
}: Props) => {
	return (
		<div className={styles.controls}>
			<button
				className={styles.editBtn}
				onClick={onEditHandler}
				disabled={isLoading}
			>
				<EditIcon />
			</button>
			<button
				className={styles.deleteBtn}
				onClick={onDeleteHandler}
				disabled={isLoading}
			>
				<DeleteIcon />
			</button>
		</div>
	);
};
