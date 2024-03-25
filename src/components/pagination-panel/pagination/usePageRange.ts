import { useEffect, useState } from 'react';

export const usePageRange = () => {
	const [pageRange, setPageRange] = useState(4);

	useEffect(() => {
		const screenWidth = window.innerWidth;

		if (screenWidth <= 1439) {
			setPageRange(3);
		} else {
			setPageRange(4);
		}
	}, []);

	return { pageRange };
};
