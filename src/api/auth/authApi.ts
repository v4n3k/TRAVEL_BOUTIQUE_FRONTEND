import { AuthApi } from '../../types/api';
import { handleApiResponse } from '../../utils/api';
import { api } from '../api';

export const authApi: AuthApi = {
	async signIn(credentials) {
		return await handleApiResponse(
			api.post('/auth/sign_in', credentials),
			'Failed to sign in'
		);
	},

	async signOut() {
		return await handleApiResponse(
			api.post('/auth/sign_out'),
			'Failed to sign out'
		);
	},

	async checkIsAuth() {
		return await handleApiResponse(
			api.get('/auth/check_token'),
			'Failed to check auth'
		);
	},
};
