import { ComponentType, lazy } from 'react';
import { LoadingBoundary } from '../components/ui/LoadingBoundary/LoadingBoundary';

export const withLazy = (componentPath: string): ComponentType => {
	const LazyComponent = () => {
		const Component = lazy(() => import(componentPath));

		return (
			<LoadingBoundary>
				<Component />
			</LoadingBoundary>
		);
	};

	return LazyComponent;
};
