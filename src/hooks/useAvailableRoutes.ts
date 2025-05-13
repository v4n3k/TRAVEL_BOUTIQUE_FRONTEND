import { useEffect, useState } from 'react';
import { authApi } from '../api/auth/authApi';
import { privateRoutes, publicRoutes } from '../routes';
import { useAuthStore } from '../stores/useAuthStore';
import { RouteEntity } from '../types/routes';

export const useAvailableRoutes = () => {
	const [availableRoutes, setAvailableRoutes] = useState<RouteEntity[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const setIsAuth = useAuthStore(state => state.setIsAuth);

	useEffect(() => {
		const checkAuthAndSetRoutes = async () => {
			setIsLoading(true);
			try {
				const data = await authApi.checkIsAuth();
				const isAuthenticated = !!data;
				setIsAuth(isAuthenticated);

				setAvailableRoutes([...publicRoutes, ...privateRoutes]);
			} catch (error) {
				console.error('Error checking authentication:', error);
				setIsAuth(false);

				setAvailableRoutes([...publicRoutes]);
			} finally {
				setIsLoading(false);
			}
		};

		checkAuthAndSetRoutes();
	}, [setIsAuth]);

	return { availableRoutes, isLoading };
};
