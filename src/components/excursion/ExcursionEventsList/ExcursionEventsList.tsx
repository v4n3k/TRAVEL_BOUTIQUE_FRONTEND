import { ExcursionEventsListProps } from '../../../types/props';
import { ExcursionEvent } from './ExcursionEvent/ExcursionEvent';
import styles from './ExcursionEventsList.module.css';

export const ExcursionEventsList = ({
	excursionEvents,
}: ExcursionEventsListProps) => {
	return (
		<>
			{excursionEvents?.length > 0 && (
				<ul className={styles.excursionEventsList}>
					{excursionEvents.map(event => (
						<ExcursionEvent key={event.id} event={event} />
					))}
				</ul>
			)}
		</>
	);
};
