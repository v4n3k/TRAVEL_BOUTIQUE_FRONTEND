import { useEffect, useState } from 'react';
import { authApi } from '../api/auth/authApi';
import { privateRoutes, publicRoutes } from '../routes';
import { useAuthStore } from '../stores/useAuthStore';

export const useAvailableRoutes = () => {
	const [availableRoutes, setAvailableRoutes] = useState(publicRoutes);
	const setIsAuth = useAuthStore(state => state.setIsAuth);
	const [isLoading, setIsLoading] = useState(true); // Add loading state

	useEffect(() => {
		setIsLoading(true); // Set loading to true on component mount

		authApi
			.checkIsAuth()
			.then(data => {
				const isAuthenticated = !!data;

				setIsAuth(isAuthenticated);
				console.log('Authentication Status:', data);

				setAvailableRoutes([
					...publicRoutes,
					...(isAuthenticated ? privateRoutes : []),
				]);
			})
			.catch(error => {
				console.error('Error checking authentication:', error);

				setIsAuth(false);
				setAvailableRoutes(publicRoutes);
			})
			.finally(() => {
				setIsLoading(false); // Set loading to false when done
			});
	}, [setIsAuth]); // Add setIsAuth to the dependency array

	return { availableRoutes, isLoading }; // Return the loading state
};
