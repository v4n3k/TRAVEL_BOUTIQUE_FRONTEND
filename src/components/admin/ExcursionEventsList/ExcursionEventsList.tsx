import { useAdminStore } from '../../../stores/useAdminSrore';
import { ExcursionEvent } from './ExcursionEvent/ExcursionEvent';
import styles from './ExcursionEventsList.module.css';

export const ExcursionEventsList = () => {
	const newExcursion = useAdminStore(state => state.newExcursion);

	const { excursionEvents } = newExcursion;

	return (
		<ul className={styles.excursionEventsList}>
			{excursionEvents?.map(event => (
				<ExcursionEvent key={event.id} {...event} />
			))}
		</ul>
	);
};
