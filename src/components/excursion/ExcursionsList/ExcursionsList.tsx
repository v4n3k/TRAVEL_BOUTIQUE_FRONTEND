import { ExcursionListProps } from '../../../types';
import { ExcursionCard } from './ExcursionCard/ExcursionCard';
import styles from './ExcursionsList.module.css';

export const ExcursionsList = ({ excursions, ref }: ExcursionListProps) => {
	return (
		<ul className={styles.excursionsList} ref={ref}>
			{excursions?.map(excursion => (
				<ExcursionCard {...excursion} key={excursion.id} />
			))}
		</ul>
	);
};
