import { useEffect, useState } from 'react';

export const IconArrowTopRight = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1480);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 1480px)');

		const handleMediaQueryChange = (event: MediaQueryListEvent) => {
			setIsSmallScreen(event.matches);
		};

		mediaQuery.addEventListener('change', handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		};
	}, []);

	const width = isSmallScreen ? 31 : 40;
	const height = isSmallScreen ? 32 : 41;

	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 40 41'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ display: 'block' }}
		>
			<circle cx='20' cy='20.5' r='20' fill='#F5F5F5' />
			<path
				d='M26.75 14.5C26.75 14.0858 26.4142 13.75 26 13.75L19.25 13.75C18.8358 13.75 18.5 14.0858 18.5 14.5C18.5 14.9142 18.8358 15.25 19.25 15.25H25.25V21.25C25.25 21.6642 25.5858 22 26 22C26.4142 22 26.75 21.6642 26.75 21.25L26.75 14.5ZM14.5303 27.0303L26.5303 15.0303L25.4697 13.9697L13.4697 25.9697L14.5303 27.0303Z'
				fill='#3E5879'
			/>
		</svg>
	);
};
