import { useMediaQuery } from '../hooks/useMediaQuery';

export const IconArrowShort = () => {
	const isLaptop = useMediaQuery('(max-width: 1480px)');

	let width = 20;

	if (isLaptop) {
		width = 14;
	}

	return (
		<svg
			width={width}
			height='9'
			viewBox='0 0 20 9'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M0.575735 4.07574C0.341421 4.31005 0.341421 4.68995 0.575735 4.92426L4.39411 8.74264C4.62843 8.97696 5.00833 8.97696 5.24264 8.74264C5.47696 8.50833 5.47696 8.12843 5.24264 7.89411L1.84853 4.5L5.24264 1.10589C5.47696 0.871573 5.47696 0.491674 5.24264 0.257359C5.00833 0.0230446 4.62843 0.0230446 4.39411 0.257359L0.575735 4.07574ZM20 3.9L1 3.9V5.1L20 5.1V3.9Z'
				fill='#3E5879'
			/>
		</svg>
	);
};
