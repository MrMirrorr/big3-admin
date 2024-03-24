import { useEffect } from 'react';

let scrollLockCount = 0;

export const useBodyScrollLock = (isScrollLock: boolean) => {
	useEffect(() => {
		if (isScrollLock) {
			scrollLockCount++;
			document.body.style.overflow = 'hidden';
		} else {
			scrollLockCount--;
			if (scrollLockCount <= 0) {
				document.body.style.overflow = 'auto';
				scrollLockCount = 0;
			}
		}
	}, [isScrollLock]);
};
