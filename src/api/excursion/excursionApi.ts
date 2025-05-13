import { ExcursionApi } from '../../types/api';
import { handleApiResponse } from '../../utils/api';
import { api } from '../api';

export const excursionApi: ExcursionApi = {
	async getAllWithCities() {
		return await handleApiResponse(
			api.get('/excursions'),
			'Failed to get excursions'
		);
	},

	async getById(id) {
		return await handleApiResponse(
			api.get(`/excursion/${id}`),
			`Failed to get excursion with id ${id}`
		);
	},

	async getByCategoryName(categoryName) {
		return await handleApiResponse(
			api.get(`/excursions/${categoryName}`),
			`Failed to get excursion with category name ${categoryName}`
		);
	},

	async getBySearch(searchQuery) {
		return await handleApiResponse(
			api.post('/excursions', { searchQuery }),
			'Failed to get excursions by search'
		);
	},

	async getBySearchWithCities(searchQuery) {
		return await handleApiResponse(
			api.post('/excursions/cities', { searchQuery }),
			'Failed to get excursions by search'
		);
	},

	async getExcursionsCities() {
		return await handleApiResponse(
			api.get('/excursions/cities'),
			'Failed to get excursions cities'
		);
	},

	async getSearchTips(searchQuery) {
		return await handleApiResponse(
			api.post('/excursions/search_tips', { searchQuery }),
			'Failed to get search tips'
		);
	},

	async create(newExcursion) {
		return await handleApiResponse(
			api.post('/excursion', newExcursion),
			'Failed to create excursion'
		);
	},

	async edit(id, updatedFields) {
		return await handleApiResponse(
			api.patch(`/excursion/${id}`, updatedFields),
			'Failed to edit excursion'
		);
	},

	async delete(id) {
		return await handleApiResponse(
			api.delete(`/excursion/${id}`),
			'Failed to delete excursion'
		);
	},

	async generateKey(id) {
		return await handleApiResponse(
			api.patch(`/excursion/${id}/key`),
			'Failed to generate key'
		);
	},
};
