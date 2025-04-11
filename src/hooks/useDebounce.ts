import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay?: number) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	const defaultDelay = 400;
	const appliedDelay = delay || defaultDelay;

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedValue(value);
		}, appliedDelay);

		return () => clearTimeout(timeoutId);
	}, [value, appliedDelay]);

	return debouncedValue;
};
