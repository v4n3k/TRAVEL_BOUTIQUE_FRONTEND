import mainImg from '../../../../assets/images/Frame 168@2x.png';
import { ExcursionCard } from './ExcursionCard/ExcursionCard';
import styles from './ExcursionsList.module.css';

const mockExcursions = [
	{
		id: 1,
		title: 'Обзорная экскурсия по Санкт-Петербургу',
		imgSrc: mainImg,
		city: 'Санкт-Петербург',
		accompanistsAmount: 2,
		personsAmount: 30,
		price: 4800,
	},
	{
		id: 2,
		title: 'Казань: тысячелетняя история',
		imgSrc: mainImg,
		city: 'Казань',
		accompanistsAmount: 1,
		personsAmount: 25,
		price: 950,
	},
	{
		id: 3,
		title: 'Золотое кольцо России: Суздаль',
		imgSrc: mainImg,
		city: 'Суздаль',
		accompanistsAmount: 3,
		personsAmount: 40,
		price: 1500,
	},
	{
		id: 4,
		title: 'Сочи: Олимпийский парк и Красная Поляна',
		imgSrc: mainImg,
		city: 'Сочи',
		accompanistsAmount: 2,
		personsAmount: 35,
		price: 1350,
	},
	{
		id: 5,
		title: 'Москва: Кремль и Красная площадь',
		imgSrc: mainImg,
		city: 'Москва',
		accompanistsAmount: 2,
		personsAmount: 30,
		price: 1100,
	},
];

export const ExcursionsList = () => {
	return (
		<ul className={styles.excursionsList}>
			{mockExcursions.map(excursion => (
				<ExcursionCard key={excursion.id} {...excursion} />
			))}
		</ul>
	);
};
