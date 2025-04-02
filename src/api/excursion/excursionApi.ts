import { ExcursionApi, ExcursionEntity } from '../../types';
import { handleApiResponse } from '../../utils/api';
import { api } from '../api';

export const excursionApi: ExcursionApi = {
	async getAll() {
		return handleApiResponse<ExcursionEntity[]>(
			api.get('/excursions'),
			'Failed to get excursions'
		);
	},

	async getById(id) {
		return handleApiResponse<ExcursionEntity>(
			api.get(`/excursion/${id}`),
			`Failed to get excursion with id ${id}`
		);
	},

	async create(newExcursion) {
		return handleApiResponse<ExcursionEntity>(
			api.post('/excursion', newExcursion, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}),
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
			'Failed to edit excursion'
		);
	},
};
