import { PaymentApi } from '../../types/api';
import { handleApiResponse } from '../../utils/api';
import { api } from '../api';

export const paymentApi: PaymentApi = {
	async create(paymentData) {
		return await handleApiResponse(
			api.post('/payment', paymentData),
			'Failed to create payment'
		);
	},
};
