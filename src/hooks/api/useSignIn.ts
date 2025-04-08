import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../api/auth/authApi';
import { useAuthStore } from '../../stores/useAuthStore';
import { RouteName, SignInCredentials } from '../../types';

export const useSignIn = () => {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const setIsAuth = useAuthStore(state => state.setIsAuth);

	const signInMutation = useMutation({
		mutationFn: (credentials: SignInCredentials) => authApi.signIn(credentials),

		onSuccess: () => {
			try {
				setIsAuth(true);
				setErrorMessage(null);
				navigate(RouteName.ADMIN);
			} catch (err) {
				console.error(err);
			}
		},

		onError: error => {
			console.error('Sign-in failed:', error);
			setErrorMessage('Invalid login or password');
		},
	});

	return {
		signIn: signInMutation.mutate,
		isPending: signInMutation.isPending,
		isError: signInMutation.isError,
		errorMessage,
	};
};
