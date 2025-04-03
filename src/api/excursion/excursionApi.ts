import { ExcursionApi } from '../../types';
import { handleApiResponse } from '../../utils/api';
import { api } from '../api';

export const excursionApi: ExcursionApi = {
	async getAll() {
		return handleApiResponse(
			api.get('/excursions'),
			'Failed to get excursions'
		);
	},

	async getById(id) {
		return handleApiResponse(
			api.get(`/excursion/${id}`),
			`Failed to get excursion with id ${id}`
		);
	},

	async create(newExcursion) {
		return handleApiResponse(
			api.post('/excursion', newExcursion),
			'Failed to create excursion'
		);
	},

	async edit(id, updatedFields) {
		return handleApiResponse(
			api.patch(`/excursion/${id}`, updatedFields),
			'Failed to edit excursion'
		);
	},

	async delete(id) {
		return handleApiResponse(
			api.delete(`/excursion/${id}`),
			'Failed to delete excursion'
		);
	},

	async generateKey(id) {
		return handleApiResponse(
			api.patch(`/excursion/${id}/key`),
			'Failed to generate key'
		);
	},
};
