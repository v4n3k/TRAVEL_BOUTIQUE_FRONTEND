import { ExcursionEventsListProps } from '../../../types';
import { ExcursionEvent } from './ExcursionEvent/ExcursionEvent';
import styles from './ExcursionEventsList.module.css';

export const ExcursionEventsList = ({
	excursionEvents,
	setExcursion,
}: ExcursionEventsListProps) => {
	return (
		<ul className={styles.excursionEventsList}>
			{excursionEvents?.map(event => (
				<ExcursionEvent key={event.id} {...event} setExcursion={setExcursion} />
			))}
		</ul>
	);
};
