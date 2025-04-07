import { useQuery } from '@tanstack/react-query';
import { excursionApi } from '../../../api/excursion/excursionApi';
import { ExcursionListProps } from '../../../types';
import { ExcursionCard } from './ExcursionCard/ExcursionCard';
import styles from './ExcursionsList.module.css';

export const ExcursionsList = ({ ref }: ExcursionListProps) => {
	const { data: excursions } = useQuery({
		queryKey: ['excursions'],
		queryFn: () => excursionApi.getAll(),
	});

	return (
		<ul className={styles.excursionsList} ref={ref}>
			{excursions?.map(excursion => (
				<ExcursionCard {...excursion} key={excursion.id} />
			))}
		</ul>
	);
};
