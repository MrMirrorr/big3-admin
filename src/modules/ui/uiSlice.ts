import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export type ToastVariantType = 'success' | 'error';

interface IUiState {
	toast: {
		message: string;
		isVisible: boolean;
		isHovered: boolean;
		variant: ToastVariantType;
	};
}

const initialState: IUiState = {
	toast: {
		message: '',
		isVisible: false,
		isHovered: false,
		variant: 'success',
	},
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		showToast(
			state,
			action: PayloadAction<{ message: string; variant: ToastVariantType }>,
		) {
			state.toast.message = action.payload.message;
			state.toast.variant = action.payload.variant;
			state.toast.isVisible = true;
		},
		hideToast(state) {
			if (!state.toast.isHovered) {
				// Проверяем, не наведён ли курсор на тост
				state.toast.isVisible = false;
			}
		},
		setToastHovered(state, action: PayloadAction<boolean>) {
			state.toast.isHovered = action.payload;
		},
	},
});

export const { showToast, hideToast, setToastHovered } = uiSlice.actions;

export const selectToast = (state: RootState) => state.ui.toast;

export default uiSlice.reducer;
