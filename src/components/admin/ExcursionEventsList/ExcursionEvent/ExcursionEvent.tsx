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

	const handleClick = () => {
		setExcursionEvents(prev => prev.filter(event => event.id !== id));
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
		const inputValue = e.target.value;

		if (inputValue.length > 5) return;

		let isValid = true;

		if (inputValue.length > 0) {
			switch (inputValue.length) {
				case 1:
					isValid = /^[0-2]$/.test(inputValue);
					break;
				case 2:
					isValid = /^(0[0-9]|1[0-9]|2[0-3])$/.test(inputValue);
					break;
				case 3:
					isValid = /^(0[0-9]|1[0-9]|2[0-3]):$/.test(inputValue);
					break;
				case 4:
					isValid = /^(0[0-9]|1[0-9]|2[0-3]):[0-5]$/.test(inputValue);
					break;
				case 5:
					isValid = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(inputValue);
					break;
				default:
					isValid = false;
					break;
			}
		}

		if (!isValid) return;

		handleChange('time', e);
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		handleChange('name', e);
	};

	return (
		<li className={styles.excursionEvent}>
			<TextInput
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
