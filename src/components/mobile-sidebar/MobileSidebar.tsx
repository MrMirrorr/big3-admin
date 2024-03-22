import { closeSidebar } from '../../modules/ui/uiSlice';
import { useAppDispatch } from '../../store/store';
import { useBodyScrollLock } from '../../hooks';
import cn from 'classnames';
import styles from './MobileSidebar.module.scss';

interface Props {
	isOpen: boolean;
}

export const MobileSidebar = ({ isOpen }: Props) => {
	const dispatch = useAppDispatch();

	useBodyScrollLock(isOpen);

	const sidebarClasses = cn(styles.sidebar, {
		[styles.open]: isOpen,
	});

	return (
		<>
			{isOpen && (
				<div
					className={styles.overlay}
					onClick={() => dispatch(closeSidebar())}
				></div>
			)}
			<div className={sidebarClasses}>MobileSidebar</div>
		</>
	);
};
