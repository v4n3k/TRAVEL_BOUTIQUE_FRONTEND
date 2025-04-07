import { Navigate, Route, Routes } from 'react-router-dom';
import { useAvailableRoutes } from './hooks/useAvailableRoutes';
import { RouteName } from './types';

export const AppRouter = () => {
	const { availableRoutes, isLoading } = useAvailableRoutes();

	if (isLoading) return <></>;

	return (
		<Routes>
			{availableRoutes.map(route => (
				<Route
					key={route.path}
					path={route.path}
					element={<route.Component />}
				/>
			))}
			<Route path='*' element={<Navigate to={RouteName.HOME} />} />
		</Routes>
	);
};
