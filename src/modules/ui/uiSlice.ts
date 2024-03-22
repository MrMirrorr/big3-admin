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
	sidebar: {
		isOpen: boolean;
	};
	search: {
		value: string;
	};
	pagination: {
		page: number;
		pageSize: number;
	};
	filters: {
		byTeams: string[];
	};
}

const initialState: IUiState = {
	toast: {
		message: '',
		isVisible: false,
		isHovered: false,
		variant: 'success',
	},
	sidebar: {
		isOpen: false,
	},
	search: {
		value: '',
	},
	pagination: {
		page: 1,
		pageSize: 6,
	},
	filters: {
		byTeams: [],
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
		openSidebar(state) {
			state.sidebar.isOpen = true;
		},
		closeSidebar(state) {
			state.sidebar.isOpen = false;
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
		setFilterByTeams(state, action: PayloadAction<string[]>) {
			state.filters.byTeams = action.payload;
		},
	},
});

export const {
	showToast,
	hideToast,
	openSidebar,
	closeSidebar,
	setToastHovered,
	setSearchValue,
	setPage,
	setPageSize,
	setFilterByTeams,
} = uiSlice.actions;

export const selectToast = (state: RootState) => state.ui.toast;
export const selectSidebar = (state: RootState) => state.ui.sidebar;
export const selectSearch = (state: RootState) => state.ui.search;
export const selectPagination = (state: RootState) => state.ui.pagination;
export const selectFilters = (state: RootState) => state.ui.filters;

export default uiSlice.reducer;
