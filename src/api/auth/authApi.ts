import { AuthApi } from '../../types';
import { handleApiResponse } from '../../utils/api';
import { api } from '../api';

export const authApi: AuthApi = {
	async signIn(credentials) {
		return await handleApiResponse(
			api.post('/auth/sign_in', credentials, { withCredentials: true }),
			'Failed to sign in'
		);
	},

	async checkIsAuth() {
		return await handleApiResponse(
			api.get('/auth/check_token', { withCredentials: true }),
			'Failed to check auth'
		);
	},
};
