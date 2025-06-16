import { ComponentType, lazy } from 'react';
import { LoadingBoundary } from '../components/ui/LoadingBoundary/LoadingBoundary';

export const withLazy = (
	importComponent: () => Promise<{ default: ComponentType }>
): ComponentType => {
	const LazyComponent = () => {
		const Component = lazy(importComponent);

		return (
			<LoadingBoundary>
				<Component />
			</LoadingBoundary>
		);
	};

	return LazyComponent;
};
