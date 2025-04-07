import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../api/auth/authApi';
import { RouteName, SignInCredentials } from '../../types';

export const useSignIn = () => {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const signInMutation = useMutation({
		mutationFn: (credentials: SignInCredentials) => authApi.signIn(credentials),

		onSuccess: () => {
			navigate(RouteName.ADMIN);
			setErrorMessage(null);
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
