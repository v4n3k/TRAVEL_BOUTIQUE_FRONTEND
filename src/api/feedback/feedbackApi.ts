import { FeedbackApi } from '../../types/api';
import { handleApiResponse } from '../../utils/api';
import { api } from '../api';

export const feedbackApi: FeedbackApi = {
	async sendToTelegramBot(message) {
		await handleApiResponse(
			api.post('/feedback', message),
			'Failed to send feedback'
		);
	},
};
