import { useEffect, useState } from 'react';
import { SetValue } from '../types/hooks';

export const useLocalStorage = <T>(
	key: string,
	initialValue: T
): [T, SetValue<T>] => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? (JSON.parse(item) as T) : initialValue;
		} catch (error) {
			console.error(
				`Error getting value from localStorage for key "${key}":`,
				error
			);
			return initialValue;
		}
	});

	const setValue: SetValue<T> = value => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;

			setStoredValue(valueToStore);

			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.error(
				`Error setting value to localStorage for key "${key}":`,
				error
			);
		}
	};

	useEffect(() => {
		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === key) {
				try {
					setStoredValue(
						event.newValue ? (JSON.parse(event.newValue) as T) : initialValue
					);
				} catch (error) {
					console.error(
						`Error parsing value from localStorage event for key "${key}":`,
						error
					);
				}
			}
		};

		window.addEventListener('storage', handleStorageChange);

		return () => {
			window.removeEventListener('storage', handleStorageChange);
		};
	}, [key, initialValue]);

	return [storedValue, setValue];
};
