import ReactPaginate from 'react-paginate';
import { ReactComponent as ArrowIcon } from './arrow.svg';
import { usePageRange } from './usePageRange';

interface Props {
	pageCount: number;
	page: number;
	handlePageChange: (selectedPage: number) => void;
}

export const Pagination = ({ pageCount, page, handlePageChange }: Props) => {
	const { pageRange } = usePageRange();

	const onPageChange = (event: { selected: number }) => {
		handlePageChange(event.selected + 1);
	};

	const safePage = Math.min(page - 1, pageCount - 1);

	return (
		<ReactPaginate
			className="pagination"
			breakLabel="..."
			nextLabel={<ArrowIcon />}
			onPageChange={onPageChange}
			pageRangeDisplayed={pageRange}
			pageCount={pageCount}
			previousLabel={<ArrowIcon />}
			marginPagesDisplayed={1}
			forcePage={safePage}
		/>
	);
};
