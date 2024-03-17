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
	pagination: {
		page: number;
		pageSize: number;
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
	pagination: {
		page: 1,
		pageSize: 6,
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
			state.pagination.page = 1;
			state.search.value = action.payload;
		},
		setPage(state, action: PayloadAction<number>) {
			state.pagination.page = action.payload;
		},
		setPageSize(state, action: PayloadAction<number>) {
			state.pagination.pageSize = action.payload;
		},
	},
});

export const {
	showToast,
	hideToast,
	setToastHovered,
	setSearchValue,
	setPage,
	setPageSize,
} = uiSlice.actions;

export const selectToast = (state: RootState) => state.ui.toast;
export const selectSearch = (state: RootState) => state.ui.search;
export const selectPagination = (state: RootState) => state.ui.pagination;

export default uiSlice.reducer;
