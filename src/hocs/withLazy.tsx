import { ComponentType, lazy } from 'react';
import { LazyComponent } from '../components/ui/LazyComponent/LazyComponent';

export const withLazy = (
	loader: () => Promise<{ default: ComponentType<any> }>
): ComponentType<any> => {
	const LazyWrappedComponent: ComponentType<any> = () => {
		const Component = lazy(loader);

		return (
			<LazyComponent>
				<Component />
			</LazyComponent>
		);
	};
	return LazyWrappedComponent;
};
