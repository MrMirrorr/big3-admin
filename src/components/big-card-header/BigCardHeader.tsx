import { ReactComponent as DeleteIcon } from './assets/delete.svg';
import { ReactComponent as EditIcon } from './assets/edit.svg';
import { Breadcrumbs, ICrumb } from '../breadcrumbs/Breadcrumbs';
import styles from './BigCardHeader.module.scss';

interface Props {
	crumbs: ICrumb[];
	id: number;
	onEditHandler: (id: number) => void;
	onDeleteHandler: (id: number) => void;
	isLoading: boolean;
}

export const BigCardHeader = ({
	crumbs,
	id,
	onEditHandler,
	onDeleteHandler,
	isLoading,
}: Props) => {
	return (
		<div className={styles.controlPanel}>
			<Breadcrumbs crumbs={crumbs} />
			<div className={styles.controls}>
				<button
					className={styles.editBtn}
					onClick={() => onEditHandler(id)}
					disabled={isLoading}
				>
					<EditIcon />
				</button>
				<button
					className={styles.deleteBtn}
					onClick={() => onDeleteHandler(id)}
					disabled={isLoading}
				>
					<DeleteIcon />
				</button>
			</div>
		</div>
	);
};
