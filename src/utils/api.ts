import { AxiosResponse } from 'axios';

export const handleApiResponse = async <T>(
	promise: Promise<AxiosResponse<T>>,
	errorMessage?: string
) => {
	try {
		const response = await promise;

		if (response.status < 200 || response.status >= 300) {
			const message =
				errorMessage || `Request failed with status ${response.status}`;
			console.error(message);
			throw new Error(message);
		}

		return response.data;
	} catch (error) {
		console.error(error);
	}
};
