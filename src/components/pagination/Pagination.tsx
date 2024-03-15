import ReactPaginate from 'react-paginate';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { SingleSelect } from '../../ui';

interface PaginationProps {
	totalCount?: number;
	page: number;
	pageSize: number;
	onClickAction: (selectedPage: number) => void;
}

export const Pagination = ({
	totalCount,
	page,
	pageSize,
	onClickAction,
}: PaginationProps) => {
	const pageCount = totalCount ? Math.ceil(totalCount / pageSize) : 1;

	const handlePageClick = (event: { selected: number }) => {
		onClickAction(event.selected + 1);
	};

	if (pageCount === 1) {
		return null;
	}

	return (
		<>
			<ReactPaginate
				className="pagination"
				breakLabel="..."
				nextLabel={<ArrowIcon />}
				onPageChange={handlePageClick}
				pageRangeDisplayed={4}
				pageCount={pageCount}
				previousLabel={<ArrowIcon />}
				marginPagesDisplayed={1}
				forcePage={page - 1}
			/>
			{/* <SingleSelect /> */}
		</>
	);
};
