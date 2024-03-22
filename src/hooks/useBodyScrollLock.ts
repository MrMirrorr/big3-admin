import { useEffect } from 'react';

export const useBodyScrollLock = (isScrollLock: boolean) => {
	useEffect(() => {
		if (isScrollLock) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isScrollLock]);
};
