import { Suspense } from 'react';
import { LazyComponentProps } from '../../../types/props';
import { CircularLoader } from '../CircularLoader/CircularLoader';

export const LazyComponent = ({ children }: LazyComponentProps) => {
	return <Suspense fallback={<CircularLoader />}>{children}</Suspense>;
};
