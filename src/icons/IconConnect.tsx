import { useEffect, useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

export const IconConnect = () => {
	const { width } = useWindowSize();

	const [size, setSize] = useState(width && width <= 400 ? 24 : 27);

	useEffect(() => {
		const handleResize = () => {
			setSize(width && width <= 400 ? 24 : 27);
		};

		handleResize();
	}, [width]);

	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 27 27'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M2.67962 2.5426L4.51512 0.707107C4.90564 0.316583 5.5388 0.316582 5.92933 0.707106L10.7373 5.51512C11.1279 5.90564 11.1279 6.53881 10.7373 6.92933L8.75605 8.91062C8.50361 9.16306 8.44102 9.54871 8.60068 9.86803C10.4466 13.5599 13.4401 16.5534 17.132 18.3993C17.4513 18.559 17.8369 18.4964 18.0894 18.244L20.0707 16.2627C20.4612 15.8721 21.0944 15.8721 21.4849 16.2627L26.2929 21.0707C26.6834 21.4612 26.6834 22.0944 26.2929 22.4849L24.4574 24.3204C22.346 26.4317 19.0035 26.6693 16.6148 24.8777L10.9619 20.6381C9.21838 19.3304 7.66955 17.7816 6.3619 16.0381L2.12226 10.3852C0.330722 7.99652 0.568272 4.65395 2.67962 2.5426Z'
				fill='#3E5879'
			/>
		</svg>
	);
};
