import { Navigate, Route, Routes } from 'react-router-dom';
import { allRoutes } from './routes';
import { RouteName } from './types/routes';

export const AppRouter = () => {
	return (
		<Routes>
			{allRoutes.map(route => (
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
