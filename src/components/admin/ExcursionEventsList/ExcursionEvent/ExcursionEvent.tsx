import { TextArea } from '../../';
import { useAdminStore } from '../../../../stores/useAdminSrore';
import { ExcursionEventEntity } from '../../../../types';
import { Button, TextInput } from '../../../ui';
import styles from './ExcursionEvent.module.css';

export const ExcursionEvent = ({ id, time, name }: ExcursionEventEntity) => {
	const setNewExcursion = useAdminStore(state => state.setNewExcursion);

	const setExcursionEvents = (
		updater:
			| ExcursionEventEntity[]
			| ((
					prevExcursionEvents: ExcursionEventEntity[]
			  ) => ExcursionEventEntity[])
	) => {
		setNewExcursion(prev => ({
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
