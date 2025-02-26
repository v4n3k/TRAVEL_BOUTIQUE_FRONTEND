import { TextArea } from '../../';
import { useExcursionEventsStore } from '../../../../stores/useExcursionEventsSrore';
import { ExcursionEventEntity } from '../../../../types';
import { Button, TextInput } from '../../../ui';
import styles from './ExcursionEvent.module.css';

export const ExcursionEvent = ({ ...data }: ExcursionEventEntity) => {
	const { id, time, name } = data;

	const setExcursionEvents = useExcursionEventsStore(
		state => state.setExcursionEvents
	);

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
				className={styles.nameTextArea}
				value={name}
				onChange={handleNameChange}
				placeholder='Событие'
			/>
			<Button onClick={handleClick}>-</Button>
		</li>
	);
};
