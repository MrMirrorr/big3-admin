import { useAppDispatch, useAppSelector } from '../../store/store';
import { hideToast, selectToast, setToastHovered } from '../../modules/ui/uiSlice';
import cn from 'classnames';
import styles from './Toast.module.scss';

export const Toast = () => {
	const dispatch = useAppDispatch();
	const { isVisible, message, variant } = useAppSelector(selectToast);

	const handleMouseEnter = () => dispatch(setToastHovered(true));
	const handleMouseLeave = () => {
		dispatch(setToastHovered(false));
		dispatch(hideToast());
	};

	const toastClasses = cn(styles.toast, {
		[styles.visible]: isVisible,
		[styles.error]: variant === 'error',
		[styles.success]: variant === 'success',
	});

	return (
		<div
			className={toastClasses}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{message}
		</div>
	);
};
