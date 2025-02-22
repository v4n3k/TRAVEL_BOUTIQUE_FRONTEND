import { useEffect, useState } from 'react';

export const IconBurgerMenu = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 740);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 740);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const iconSize = isMobile ? '48' : '56';

	return (
		<svg
			width={iconSize}
			height={iconSize}
			viewBox='0 0 56 56'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M11.6666 16.3333H44.3333'
				stroke='#222222'
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M11.6666 28H44.3333'
				stroke='#222222'
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M11.6666 39.6667H44.3333'
				stroke='#222222'
				strokeWidth='2'
				strokeLinecap='round'
			/>
		</svg>
	);
};
