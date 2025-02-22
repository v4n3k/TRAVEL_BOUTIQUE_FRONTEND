import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { useAuthStore } from './stores/useAuthStore';
import { RouteName } from './types/routes';

export const AppRouter = () => {
	const isAuth = useAuthStore(state => state.isAuth);

	const availableRoutes = [...publicRoutes, ...(isAuth ? privateRoutes : [])];

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
