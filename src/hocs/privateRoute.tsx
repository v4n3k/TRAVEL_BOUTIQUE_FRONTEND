import { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckIsAuth } from '../hooks/api/useCheckIsAuth';
import { RouteName } from '../types/routes';

export const privateRoute = (Component: ComponentType): ComponentType => {
	const PrivateRouteComponent = () => {
		const navigate = useNavigate();
		const { isAuth, isLoading } = useCheckIsAuth();

		useEffect(() => {
			if (!isAuth && !isLoading) {
				navigate(RouteName.SIGN_IN);
			}
		}, [isAuth, isLoading]);

		return <Component />;
	};

	return PrivateRouteComponent;
};
