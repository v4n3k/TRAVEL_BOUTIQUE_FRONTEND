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

	async create(data) {
		handleApiResponse<void>(
			api.post('/excursion', data),
			'Failed to create excursion'
		);
	},
};
