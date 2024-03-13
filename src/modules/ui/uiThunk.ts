import { AppThunk } from '../../store/store';
import { ToastVariantType, hideToast, showToast } from './uiSlice';

let toastTimer: NodeJS.Timeout | null = null;

interface IOptions {
	duration?: number;
	variant: ToastVariantType;
}

export const displayToast =
	(message: string, { duration = 3000, variant }: IOptions): AppThunk =>
	(dispatch) => {
		if (toastTimer) {
			clearTimeout(toastTimer);
			toastTimer = null;
		}

		dispatch(showToast({ message, variant }));
		toastTimer = setTimeout(() => {
			dispatch(hideToast());
			toastTimer = null;
		}, duration);
	};
