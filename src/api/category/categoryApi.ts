import { CategoryApi, CategoryEntity } from '../../types';
import { handleApiResponse } from '../../utils/api';
import { api } from '../api';

export const categoryApi: CategoryApi = {
	async create(newCategory) {
		return handleApiResponse<CategoryEntity>(
			api.post('/category', newCategory, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}),
			'Failed to create category'
		);
	},
};
