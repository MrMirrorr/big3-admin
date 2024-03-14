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
	search: {
		value: string;
	};
}

const initialState: IUiState = {
	toast: {
		message: '',
		isVisible: false,
		isHovered: false,
		variant: 'success',
	},
	search: {
		value: '',
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
				state.toast.isVisible = false;
			}
		},
		setToastHovered(state, action: PayloadAction<boolean>) {
			state.toast.isHovered = action.payload;
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.search.value = action.payload;
		},
	},
});

export const { showToast, hideToast, setToastHovered, setSearchValue } = uiSlice.actions;

export const selectToast = (state: RootState) => state.ui.toast;
export const selectSearch = (state: RootState) => state.ui.search;

export default uiSlice.reducer;
