import { CategoryApi } from '../../types';
import { handleApiResponse } from '../../utils/api';
import { api } from '../api';

export const categoryApi: CategoryApi = {
	async getAll() {
		return await handleApiResponse(
			api.get('/categories'),
			'Failed to get all categories'
		);
	},

	async getBySearch(categoryType, searchQuery) {
		return await handleApiResponse(
			api.post('/categories', { categoryType, searchQuery }),
			'Failed to get categories by search'
		);
	},

	async create(newCategory) {
		return await handleApiResponse(
			api.post('/category', newCategory, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}),
			'Failed to create category'
		);
	},
};
