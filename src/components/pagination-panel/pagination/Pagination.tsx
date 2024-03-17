import ReactPaginate from 'react-paginate';
import { ReactComponent as ArrowIcon } from './arrow.svg';

interface Props {
	pageCount: number;
	page: number;
	handlePageChange: (selectedPage: number) => void;
}

export const Pagination = ({ pageCount, page, handlePageChange }: Props) => {
	const onPageChange = (event: { selected: number }) => {
		handlePageChange(event.selected + 1);
	};

	return (
		<ReactPaginate
			className="pagination"
			breakLabel="..."
			nextLabel={<ArrowIcon />}
			onPageChange={onPageChange}
			pageRangeDisplayed={4}
			pageCount={pageCount}
			previousLabel={<ArrowIcon />}
			marginPagesDisplayed={1}
			forcePage={page - 1}
		/>
	);
};
