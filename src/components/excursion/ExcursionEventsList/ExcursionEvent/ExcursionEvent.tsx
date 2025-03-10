import { ExcursionEventProps } from '../../../../types';
import styles from './ExcursionEvent.module.css';

export const ExcursionEvent = ({ event }: ExcursionEventProps) => {
	return (
		<li className={styles.excursionEvent}>
			<span className={styles.time}>{event.time}</span>
			<span className={styles.name}>{event.name}</span>
		</li>
	);
};
