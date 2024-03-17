import { useNavigate } from 'react-router-dom';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import { Breadcrumbs, ICrumb } from '../breadcrumbs/Breadcrumbs';
import styles from './BigCardHeader.module.scss';

interface Props {
	crumbs: ICrumb[];
	id: number;
	type: 'team' | 'player';
}

export const BigCardHeader = ({ crumbs, id, type }: Props) => {
	const navigate = useNavigate();
	let to: string = '';

	switch (type) {
		case 'team':
			to = `/teams/manage/${id}`;
			break;
		case 'player':
			to = `/players/manage/${id}`;
			break;
		default:
			break;
	}

	return (
		<div className={styles.controlPanel}>
			<Breadcrumbs crumbs={crumbs} />
			<div className={styles.controls}>
				<button className={styles.editBtn} onClick={() => navigate(to)}>
					<EditIcon />
				</button>
				<button className={styles.deleteBtn}>
					<DeleteIcon />
				</button>
			</div>
		</div>
	);
};
