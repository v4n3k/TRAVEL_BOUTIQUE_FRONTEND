import { ComponentType, lazy } from 'react';
import { LazyComponent } from '../components/ui/LazyComponent/LazyComponent';

export const withLazy = (componentPath: string): ComponentType => {
	const LazyWrappedComponent = () => {
		const Component = lazy(() => import(componentPath));

		return (
			<LazyComponent>
				<Component />
			</LazyComponent>
		);
	};

	return LazyWrappedComponent;
};
