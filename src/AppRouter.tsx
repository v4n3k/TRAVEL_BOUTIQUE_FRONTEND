import { Navigate, Route, Routes } from 'react-router-dom';
import { useAvailableRoutes } from './hooks/useAvailableRoutes';
import { useAuthStore } from './stores/useAuthStore';
import { RouteName } from './types';

export const AppRouter = () => {
	const isAuth = useAuthStore(state => state.isAuth);
	const { availableRoutes, isLoading } = useAvailableRoutes();

	if (isLoading) return <></>;

	return (
		<Routes>
			{availableRoutes.map(route => (
				<Route
					key={route.path}
					path={route.path}
					element={
						route.isPrivate && !isAuth ? (
							<Navigate
								to={{
									pathname: RouteName.SIGN_IN,
								}}
								replace
							/>
						) : (
							<route.Component />
						)
					}
				/>
			))}
			<Route path='*' element={<Navigate to={RouteName.HOME} />} />
		</Routes>
	);
};
