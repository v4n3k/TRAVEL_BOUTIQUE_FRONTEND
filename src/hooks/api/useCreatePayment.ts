import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { paymentApi } from '../../api/payment/paymentApi';
import { PaymentData } from '../../types/api';

export const useCreatePayment = () => {
	const [errorMessage, setErrorMessage] = useState('');

	const mutation = useMutation({
		mutationFn: ({ amount, excursionId, excursionKey }: PaymentData) =>
			paymentApi.create({
				amount,
				excursionId,
				excursionKey,
			}),

		onSuccess: data => {
			if (data.confirmationUrl) {
				window.open(data.confirmationUrl);
			}
		},

		onError: (error: any) => {
			setErrorMessage(error?.response?.data?.errorRu || 'Неизвестная ошибка');
		},
	});

	return {
		createPayment: mutation.mutate,
		...mutation,
		errorMessage,
	};
};
