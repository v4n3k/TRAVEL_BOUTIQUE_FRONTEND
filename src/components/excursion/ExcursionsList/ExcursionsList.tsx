import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import mainImg from '../../../../assets/images/Frame 168@2x.png';
import { excursionApi } from '../../../api/excursion/excursionApi';
import { ExcursionCard } from './ExcursionCard/ExcursionCard';
import styles from './ExcursionsList.module.css';

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
	{
		id: 4,
		name: 'Сочи: Олимпийский парк и Красная Поляна',
		imgSrc: mainImg,
		city: 'Сочи',
		accompanistsAmount: 2,
		personsAmount: 35,
		price: 1350,
	},
	{
		id: 5,
		name: 'Москва: Кремль и Красная площадь',
		imgSrc: mainImg,
		city: 'Москва',
		accompanistsAmount: 2,
		personsAmount: 30,
		price: 1100,
	},
];

export const ExcursionsList = () => {
	const { data: excursions, isLoading, isError, error } = useQuery({
		queryKey: ['excursions'],
		queryFn: () => excursionApi.getAll(),
	});

	useEffect(() => {
		console.log(excursions, isLoading, isError, error);
	}, [excursions, isLoading, isError, error]);

	const mergedExcursions = [
		...mockExcursions,
		...(Array.isArray(excursions) ? excursions : []),
	];

	return (
		<ul className={styles.excursionsList}>
			{mergedExcursions?.map(excursion => (
				<ExcursionCard key={excursion.id} {...excursion} />
			))}
		</ul>
	);
};
