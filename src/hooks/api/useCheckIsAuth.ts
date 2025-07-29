import { useQuery } from '@tanstack/react-query';
import { authApi } from '../../api/auth/authApi';

export const useCheckIsAuth = () => {
	const { data, ...query } = useQuery({
		queryKey: ['isAuth'],
		queryFn: () => authApi.checkIsAuth(),
		retry: false,
	});

	if (!data) {
		return { isAuth: false, ...query };
	}

	return { isAuth: data.isAuth, ...query };
};
