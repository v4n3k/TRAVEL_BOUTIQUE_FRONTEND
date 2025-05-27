import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../api/auth/authApi';
import { useAuthStore } from '../../stores/useAuthStore';
import { SignInCredentials, signInResponse } from '../../types/api';
import { RouteName } from '../../types/routes';

export const useSignIn = () => {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const setIsAuth = useAuthStore(state => state.setIsAuth);

	const signInMutation = useMutation({
		mutationFn: (credentials: SignInCredentials) => authApi.signIn(credentials),

		onSuccess: data => {
			try {
				if (data?.login) {
					setIsAuth(true);
					setErrorMessage(null);
					localStorage.setItem('login', String(data?.login));
					navigate(RouteName.ADMIN);
				}
			} catch (err) {
				console.error(err);
			}
		},

		onError: (error: AxiosError<signInResponse>) => {
			console.log('Sign-in failed:', error);
			setErrorMessage(error?.response?.data?.errorRu || 'Неизвестная ошибка');
		},
	});

	return {
		signIn: signInMutation.mutate,

		isPending: signInMutation.isPending,
		isError: signInMutation.isError,
		errorMessage,
	};
};
