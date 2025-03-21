import { useQuery } from '@tanstack/react-query';
import { ComponentProps } from 'react';
import mainImg from '../../../../assets/images/Frame 168@2x.png';
import { excursionApi } from '../../../api/excursion/excursionApi';
import { ExcursionCard } from './ExcursionCard/ExcursionCard';
import styles from './ExcursionsList.module.css';
import { ExcursionListProps } from '../../../types';

const mockExcursions = [
	{
		id: 1,
		name: 'Обзорная экскурсия по Санкт-Петербургу',
		imgSrc: mainImg,
		city: 'Санкт-Петербург',
		accompanistsAmount: 2,
		personsAmount: 30,
		price: 4800,
	},
	{
		id: 2,
		name: 'Казань: тысячелетняя история',
		imgSrc: mainImg,
		city: 'Казань',
		accompanistsAmount: 1,
		personsAmount: 25,
		price: 950,
	},
	{
		id: 3,
		name: 'Золотое кольцо России: Суздаль',
		imgSrc: mainImg,
		city: 'Суздаль',
		accompanistsAmount: 3,
		personsAmount: 40,
		price: 1500,
	},
];

export const ExcursionsList = ({ ref }: ExcursionListProps) => {
	const { data: excursions } = useQuery({
		queryKey: ['excursions'],
		queryFn: () => excursionApi.getAll(),
	});

	const mergedExcursions = [
		...mockExcursions,
		...(Array.isArray(excursions) ? excursions : []),
	];

	return (
		<ul className={styles.excursionsList} ref={ref}>
			{mergedExcursions?.map(excursion => (
				<ExcursionCard key={excursion.id} {...excursion} />
			))}
		</ul>
	);
};
