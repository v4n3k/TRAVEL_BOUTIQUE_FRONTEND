import { AxiosResponse } from 'axios';

export const handleApiResponse = async <T>(
	promise: Promise<AxiosResponse<T>>,
	errorMessage?: string
): Promise<T> => {
	try {
		const response = await promise;

		if (response.status < 200 || response.status >= 300) {
			const message =
				errorMessage || `Request failed with status ${response.status}`;
			console.error(message);
			throw new Error(message);
		}

		const data = (await response.data) as T;
		return data;
	} catch (err) {
		console.error(err);
		throw err;
	}
};
