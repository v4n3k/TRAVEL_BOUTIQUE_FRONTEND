import { Suspense } from 'react';
import { LoadingBoundaryProps } from '../../../types/props';
import { CircularLoader } from '../CircularLoader/CircularLoader';

export const LoadingBoundary = ({ children }: LoadingBoundaryProps) => {
	return <Suspense fallback={<CircularLoader />}>{children}</Suspense>;
};
