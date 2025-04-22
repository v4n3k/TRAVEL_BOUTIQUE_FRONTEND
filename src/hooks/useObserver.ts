import { RefObject, useEffect, useState } from 'react';

export const useIntersectionObserver = <T>(
	elementRef: RefObject<T>,
	options: IntersectionObserverInit = {}
): [boolean, IntersectionObserverEntry | null] => {
	const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
	const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

	useEffect(() => {
		const element = elementRef.current;

		if (!element) {
			return;
		}

		const observerCallback: IntersectionObserverCallback = entries => {
			const [firstEntry] = entries;
			setIsIntersecting(firstEntry.isIntersecting);
			setEntry(firstEntry);
		};

		const observer = new IntersectionObserver(observerCallback, options);

		observer.observe(element as unknown as Element);

		return () => {
			observer.disconnect();
		};
	}, [elementRef, options]);

	return [isIntersecting, entry];
};
