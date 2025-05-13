import { ExcursionEventsInputsListProps } from '../../../types/props';
import { ExcursionEvent } from './ExcursionEvent/ExcursionEvent';
import styles from './ExcursionEventsList.module.css';

export const ExcursionEventsList = ({
	excursionEvents,
	setExcursion,
}: ExcursionEventsInputsListProps) => {
	return (
		<ul className={styles.excursionEventsList}>
			{excursionEvents?.map(event => (
				<ExcursionEvent key={event.id} {...event} setExcursion={setExcursion} />
			))}
		</ul>
	);
};
