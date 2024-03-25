import { Breadcrumbs, ICrumb } from '../breadcrumbs/Breadcrumbs';
import { BigCardHeaderControls } from './BigCardHeaderControls';
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
			<BigCardHeaderControls
				onEditHandler={() => onEditHandler(id)}
				onDeleteHandler={() => onDeleteHandler(id)}
				isLoading={isLoading}
			/>
		</div>
	);
};
