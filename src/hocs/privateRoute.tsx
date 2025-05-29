import { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckIsAuth } from '../hooks/api/useCheckIsAuth';
import { RouteName } from '../types/routes';

export const privateRoute = (Component: ComponentType): ComponentType => {
	const PrivateRouteComponent = () => {
		const navigate = useNavigate();
		const { isAuth } = useCheckIsAuth();

		useEffect(() => {
			if (!isAuth) {
				navigate(RouteName.SIGN_IN);
			}
		}, [isAuth]);

		return <Component />;
	};

	return PrivateRouteComponent;
};
