import { CategoryApi } from '../../types';
import { handleApiResponse } from '../../utils/api';
import { api } from '../api';

export const categoryApi: CategoryApi = {
	async getAll() {
		return await handleApiResponse(
			api.get('/categories', {
				withCredentials: true,
			}),
			'Failed to get all categories'
		);
	},

	async create(newCategory) {
		return await handleApiResponse(
			api.post('/category', newCategory, {
				withCredentials: true,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}),
			'Failed to create category'
		);
	},
};
