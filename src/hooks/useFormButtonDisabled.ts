import { useEffect, useState } from 'react';
import { FormFields } from '../types/hooks';

export const useFormButtonDisabled = (formFields: FormFields): boolean => {
	const [disabled, setDisabled] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (mounted) {
			const allFieldsFilled = Object.values(formFields).every(
				value => value !== ''
			);
			setDisabled(!allFieldsFilled);
		} else {
			setMounted(true);
		}
	}, [formFields]);

	return disabled;
};
