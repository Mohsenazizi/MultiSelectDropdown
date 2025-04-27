import { useEffect, useRef } from 'react';

type Event = MouseEvent | TouchEvent;

const useClickAway = <T extends HTMLElement>(onClickAway: () => void) => {
	const ref = useRef<T>(null);

	useEffect(() => {
		function handleClickOutside(event: Event) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onClickAway();
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
		};
	}, [onClickAway]);

	return ref;
};

export default useClickAway;
