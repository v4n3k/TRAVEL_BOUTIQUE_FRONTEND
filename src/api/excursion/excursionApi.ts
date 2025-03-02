import { ExcursionApi, ExcursionEntity } from '../../types';
import { handleApiResponse } from '../../utils/apiUtils';
import { api } from '../api';

export const excursionApi: ExcursionApi = {
	async getAll() {
		return handleApiResponse<ExcursionEntity[]>(
			api.get('/excursions'),
			'Failed to get excursions'
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
};
