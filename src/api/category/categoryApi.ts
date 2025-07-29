import { CategoryApi } from '../../types/api';
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

	async getById(id) {
		return await handleApiResponse(
			api.get(`/category/${id}`),
			`Failed to get category with id ${id}`
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

	async update(id, updatedFields) {
		return await handleApiResponse(
			api.patch(`/category/${id}`, updatedFields, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}),
			'Failed to update category'
		);
	},

	async delete(id) {
		return await handleApiResponse(
			api.delete(`/category/${id}`),
			'Failed to delete category'
		);
	},
};
