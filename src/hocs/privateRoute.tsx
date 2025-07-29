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
		}, [isAuth, isLoading, navigate]);

		if (isLoading) {
			return null;
		}

		if (!isAuth) {
			return null;
		}

		return <Component />;
	};

	return PrivateRouteComponent;
};
