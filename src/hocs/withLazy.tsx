import { ComponentType } from 'react';
import { LazyComponent } from '../components/ui';

export const withLazy = (
	loader: () => Promise<{ default: ComponentType<any> }>
): ComponentType<any> => {
	const LazyWrappedComponent: ComponentType<any> = () => (
		<LazyComponent loader={loader} />
	);
	return LazyWrappedComponent;
};
