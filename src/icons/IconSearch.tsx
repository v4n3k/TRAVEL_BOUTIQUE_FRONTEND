import { useMediaQuery } from '../hooks/useMediaQuery';
import { IconSearchProps } from '../types';

export const IconSearch = ({ resizable = false }: IconSearchProps) => {
	const isLaptop = useMediaQuery('(max-width: 1480px)');
	const isMobile = useMediaQuery('(max-width: 440px)');

	let iconSize = 28;

	if (resizable) {
		if (isMobile) {
			iconSize = 16;
		} else if (isLaptop) {
			iconSize = 20;
		}
	}

	return (
		<svg
			width={iconSize}
			height={iconSize}
			viewBox={`0 0 ${iconSize} ${iconSize}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle
				cx={iconSize * 0.4583}
				cy={iconSize * 0.4583}
				r={iconSize * 0.25}
				stroke='#222222'
				strokeWidth={iconSize / 14}
			/>
			<path
				d={`M${iconSize * 0.8333} ${iconSize * 0.8333}L${iconSize * 0.7083} ${
					iconSize * 0.7083
				}`}
				stroke='#222222'
				strokeWidth={iconSize / 14}
				strokeLinecap='round'
			/>
		</svg>
	);
};
