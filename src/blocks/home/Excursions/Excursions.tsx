import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { excursionApi } from '../../../api/excursion/excursionApi';
import { ExcursionsList } from '../../../components/excursion';
import { Section } from '../../../components/ui';
import { ListSlider } from '../../../components/ui/ListSlider/ListSlider';
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
			<ListSlider
				listRef={listRef}
				buttonClassName={styles.sliderButton}
				widthOnGradientHide={1070}
				items={excursionItems}
				setItems={setExcursionItems}
			>
				<ExcursionsList ref={listRef} excursions={excursionItems} />
			</ListSlider>
		</Section>
	);
};
