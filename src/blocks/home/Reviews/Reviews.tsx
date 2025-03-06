import { Section } from '../../../components/ui';
import { Review } from './Review/Review';
import styles from './Reviews.module.css';

const reviews = [
	{
		id: 1,
		author: 'Светлана Николаевна',
		text: 'Мы очень рады, что детям понравилось!',
	},
	{
		id: 2,
		author: 'Путилова Анастасия',
		text: 'Спасибо за кучу эмоций и впечатлений! Сыну понравилось 🙌🏻',
	},
	{
		id: 3,
		author: 'Панина Марина',
		text:
			'Да очень здорово было. Дочь в восторге. Ножки устали говорит,но это приятная и усталость. Столько впечатлений!!! Если будет ещё что то подобное, обязательно поедем',
	},
	{ id: 4, author: 'Богданова Ольга', text: 'Огромное спасибо педагогам !!!' },
	{
		id: 5,
		author: 'Филинкова Анастасия',
		text: 'Уважаемые учителя, спасибо большое за поездку, всё понравилось!',
	},
	{
		id: 6,
		author: 'Светлана Николаевна',
		text: 'Мы очень рады, что детям понравилось!',
	},
	{
		id: 7,
		author: 'Путилова Анастасия',
		text: 'Спасибо за кучу эмоций и впечатлений! Сыну понравилось 🙌🏻',
	},
];

export const Reviews = () => {
	return (
		<Section className={styles.reviews}>
			<h2 className={styles.title}>Отзывы</h2>
			<ul className={styles.reviewsList}>
				{reviews.map(review => (
					<Review {...review} />
				))}
			</ul>
		</Section>
	);
};
