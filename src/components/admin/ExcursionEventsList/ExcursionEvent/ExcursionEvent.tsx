import React, { useRef } from 'react';
import { ExcursionEventEntity } from '../../../../types/entities';
import { ExcursionEventInputsListProps } from '../../../../types/props';
import { Button } from '../../../ui/Button/Button';
import { TextInput } from '../../../ui/TextInput/TextInput';
import { TextArea } from '../../ui/TextArea/TextArea';
import styles from './ExcursionEvent.module.css';

export const ExcursionEvent = ({
	id,
	time,
	name,
	setExcursion,
}: ExcursionEventInputsListProps) => {
	const timeInputRef = useRef<HTMLInputElement>(null);

	const setExcursionEvents = (
		updater:
			| ExcursionEventEntity[]
			| ((
					prevExcursionEvents: ExcursionEventEntity[]
			  ) => ExcursionEventEntity[])
	) => {
		setExcursion(prev => ({
			...prev,
			excursionEvents:
				typeof updater === 'function' ? updater(prev.excursionEvents) : updater,
		}));
	};

	const handleChange = (
		key: string,
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const newValue = e.target.value;
		setExcursionEvents(prev =>
			prev.map(event =>
				event.id === id ? { ...event, [key]: newValue } : event
			)
		);
	};

	const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const originalValue = e.target.value;
		const previousValue = time;

		const wasDeletion = originalValue.length < previousValue.length;

		let digits = originalValue.replace(/\D/g, '').substring(0, 4);

		if (wasDeletion && previousValue.length === 3) {
			digits = digits.substring(0, 1);
		}

		const firstDigit = digits.charAt(0);
		const thirdDigit = digits.charAt(2);
		if (
			(digits.length === 1 && firstDigit >= '3' && firstDigit <= '9') ||
			(digits.length === 3 && thirdDigit >= '6' && thirdDigit <= '9')
		) {
			return;
		}

		const hours = digits.substring(0, 2);
		const minutes = digits.substring(2, 4);

		const hourNum = parseInt(hours, 10);
		const minuteNum = parseInt(minutes, 10);

		const isValidHours =
			hours.length === 0 || (!isNaN(hourNum) && hourNum >= 0 && hourNum <= 23);
		const isValidMinutes =
			minutes.length === 0 ||
			(!isNaN(minuteNum) && minuteNum >= 0 && minuteNum <= 59);

		if (!isValidHours || (minutes.length > 0 && !isValidMinutes)) {
			return;
		}

		let formattedValue = digits;

		if (digits.length >= 2) {
			formattedValue = digits.substring(0, 2) + ':' + digits.substring(2);
		} else if (digits.length === 0) {
			formattedValue = '';
		}

		handleChange('time', {
			...e,
			target: {
				...e.target,
				value: formattedValue,
			},
		});
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		handleChange('name', e);
	};

	const handleClick = () => {
		setExcursionEvents(prev => prev.filter(event => event.id !== id));
	};

	return (
		<li className={styles.excursionEvent}>
			<TextInput
				ref={timeInputRef}
				className={styles.timeInput}
				value={time}
				onChange={handleTimeChange}
				placeholder='00:00'
			/>
			<TextArea
				id={styles.nameTextArea}
				value={name}
				onChange={handleNameChange}
				rows={1}
				placeholder='Событие'
			/>
			<Button
				className={styles.deleteButton}
				backgroundColor='red-300'
				color='white-50'
				onClick={handleClick}
			>
				-
			</Button>
		</li>
	);
};
