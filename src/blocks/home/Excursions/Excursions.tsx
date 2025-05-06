import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { excursionApi } from '../../../api/excursion/excursionApi';
import { ExcursionsList } from '../../../components/excursion';
import { Section } from '../../../components/ui';
import { ExcursionWithCity } from '../../../types';
import styles from './Excursions.module.css';

export const Excursions = () => {
	const listRef = useRef<HTMLUListElement>(null);

	const [excursionItems, setExcursionItems] = useState<ExcursionWithCity[]>([]);

	const { data: excursions } = useQuery({
		queryKey: ['excursions'],
		queryFn: () => excursionApi.getAllWithCities(),
	});

	useEffect(() => {
		if (excursions) {
			setExcursionItems(excursions);
		}
	}, [excursions]);

	if (!excursions) {
		return null;
	}

	return (
		<Section>
			<div className={styles.sliderContainer}>
				<ExcursionsList ref={listRef} excursions={excursionItems} />
			</div>
		</Section>
	);
};
