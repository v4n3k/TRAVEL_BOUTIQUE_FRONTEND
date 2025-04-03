import { useCallback, useState } from 'react';
import { UseCopyToClipboard } from '../types/hooks';

export const useCopyToClipboard = (): UseCopyToClipboard => {
	const [value, setValue] = useState<string | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [isCopied, setIsCopied] = useState<boolean>(false);

	const copy = useCallback(async (text: string): Promise<boolean> => {
		try {
			await navigator.clipboard.writeText(text);
			setValue(text);
			setError(null);
			setIsCopied(true);
			return true;
		} catch (err) {
			setError(err as Error);
			setIsCopied(false);
			return false;
		}
	}, []);

	const reset = useCallback(() => {
		setValue(null);
		setError(null);
		setIsCopied(false);
	}, []);

	return {
		value,
		copy,
		reset,
		error,
		isCopied,
	};
};
