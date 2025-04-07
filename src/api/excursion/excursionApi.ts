import { ExcursionApi } from '../../types';
import { handleApiResponse } from '../../utils/api';
import { api } from '../api';

export const excursionApi: ExcursionApi = {
	async getAll() {
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

	async create(newExcursion) {
		return await handleApiResponse(
			api.post('/excursion', newExcursion, { withCredentials: true }),
			'Failed to create excursion'
		);
	},

	async edit(id, updatedFields) {
		return await handleApiResponse(
			api.patch(`/excursion/${id}`, updatedFields, { withCredentials: true }),
			'Failed to edit excursion'
		);
	},

	async delete(id) {
		return await handleApiResponse(
			api.delete(`/excursion/${id}`, { withCredentials: true }),
			'Failed to delete excursion'
		);
	},

	async generateKey(id) {
		return await handleApiResponse(
			api.patch(`/excursion/${id}/key`, { withCredentials: true }),
			'Failed to generate key'
		);
	},
};
