import { useEffect, useState } from 'react';
import { useAppDispatch } from '../store/store';
import { setSearchValue } from '../modules/ui/uiSlice';
import { useDebounce } from './useDebounce';

export const useDebouncedSearch = () => {
	const dispatch = useAppDispatch();

	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearchTerm = useDebounce(searchTerm, 1000);

	useEffect(() => {
		dispatch(setSearchValue(debouncedSearchTerm));
	}, [debouncedSearchTerm, dispatch]);

	return { searchTerm, setSearchTerm };
};
