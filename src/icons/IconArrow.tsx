export interface IconArrowProps {
	direction: 'left' | 'right' | 'top' | 'bottom';
}

export const IconArrow = ({ direction = 'right' }: IconArrowProps) => {
	let rotation = 0;
	switch (direction) {
		case 'left':
			rotation = 180;
			break;
		case 'top':
			rotation = -90;
			break;
		case 'bottom':
			rotation = 90;
			break;
		case 'right':
		default:
			rotation = 0;
			break;
	}

	return (
		<svg
			width='27'
			height='16'
			viewBox='0 0 27 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ transform: `rotate(${rotation}deg)`, transformOrigin: 'center' }}
		>
			<path
				d='M26.4354 8.70711C26.8259 8.31658 26.8259 7.68342 26.4354 7.29289L20.0715 0.928932C19.6809 0.538408 19.0478 0.538408 18.6572 0.928932C18.2667 1.31946 18.2667 1.95262 18.6572 2.34315L24.3141 8L18.6572 13.6569C18.2667 14.0474 18.2667 14.6805 18.6572 15.0711C19.0478 15.4616 19.6809 15.4616 20.0715 15.0711L26.4354 8.70711ZM0.272461 9L25.7283 9V7L0.272461 7L0.272461 9Z'
				fill='#3E5879'
			/>
		</svg>
	);
};
