import { useExcursionEventsStore } from '../../../stores/useExcursionEventsSrore';
import { ExcursionEvent } from './ExcursionEvent/ExcursionEvent';
import styles from './ExcursionEventsList.module.css';

export const ExcursionEventsList = () => {
	const excursionEvents = useExcursionEventsStore(
		state => state.excursionEvents
	);

	return (
		<ul className={styles.excursionEventsList}>
			{excursionEvents.map(event => (
				<ExcursionEvent key={event.id} {...event} />
			))}
		</ul>
	);
};
