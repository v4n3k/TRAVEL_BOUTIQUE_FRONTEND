import { ExcursionEventsInputsListProps } from '../../../types/props';
import { ExcursionEventInputs } from './ExcursionEvent/ExcursionEvent';
import styles from './ExcursionEventsList.module.css';

export const ExcursionEventInputsList = ({
	excursionEvents,
	setExcursion,
}: ExcursionEventsInputsListProps) => {
	return (
		<ul className={styles.excursionEventsList}>
			{excursionEvents?.map(event => (
				<ExcursionEventInputs
					key={event.id}
					{...event}
					setExcursion={setExcursion}
				/>
			))}
		</ul>
	);
};
