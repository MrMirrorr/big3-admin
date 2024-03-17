import { useEffect } from 'react';
import { Pagination } from './pagination/Pagination';
import { SelectPageSize } from './select-page-size/SelectPageSize';

interface Props {
	totalCount?: number;
	page: number;
	pageSize: number;
	handlePageChange: (selectedPage: number) => void;
	handleChangePageCount: (selectedValue: number) => void;
}

export const PaginationPanel = ({
	totalCount,
	page,
	pageSize,
	handlePageChange,
	handleChangePageCount,
}: Props) => {
	const pageCount = totalCount ? Math.ceil(totalCount / pageSize) : 1;

	const normalizeCurrentPage = () => {
		if (page > pageCount) {
			handlePageChange(pageCount);
		}
	};

	useEffect(() => {
		normalizeCurrentPage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageSize]);

	return (
		<>
			<Pagination
				pageCount={pageCount}
				page={page}
				handlePageChange={handlePageChange}
			/>
			<SelectPageSize handleChangePageCount={handleChangePageCount} />
		</>
	);
};
