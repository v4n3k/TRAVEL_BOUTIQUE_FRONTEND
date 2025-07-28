import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { paymentApi } from '../../api/payment/paymentApi';
import { PaymentData } from '../../types/api';

export const useCreatePayment = () => {
	const [errorMessage, setErrorMessage] = useState('');

	const mutation = useMutation({
		mutationFn: ({ amount, phone, excursionId, excursionKey }: PaymentData) =>
			paymentApi.create({
				amount,
				phone,
				excursionId,
				excursionKey,
			}),

		onSuccess: data => {
			if (data.confirmationUrl) {
				window.location.href = data.confirmationUrl;
			}
		},

		onError: (error: AxiosError<{ errorRu: string }>) => {
			setErrorMessage(error?.response?.data?.errorRu || 'Неизвестная ошибка');
		},
	});

	return {
		createPayment: mutation.mutate,
		...mutation,
		errorMessage,
	};
};
