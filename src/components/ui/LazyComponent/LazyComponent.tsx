import { lazy, Suspense } from 'react';
import { CircularLoader } from '..';
import { LazyComponentProps } from '../../../types';

export const LazyComponent = ({ loader }: LazyComponentProps) => {
	const Component = lazy(loader);

	return (
		<Suspense fallback={<CircularLoader />}>
			<Component />
		</Suspense>
	);
};
