import { useRef, useState } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { Expandable, ListSlider } from '../../ui';
import { Review } from './Review/Review';
import styles from './ReviewsList.module.css';
import { ReviewEntity } from '../../../types';

const mockReviews = [
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
	{
		id: 8,
		author: 'Светлана Николаевна',
		text: 'Мы очень рады, что детям понравилось!',
	},
	{
		id: 9,
		author: 'Путилова Анастасия',
		text: 'Спасибо за кучу эмоций и впечатлений! Сыну понравилось 🙌🏻',
	},
	{
		id: 10,
		author: 'Панина Марина',
		text:
			'Да очень здорово было. Дочь в восторге. Ножки устали говорит,но это приятная и усталость. Столько впечатлений!!! Если будет ещё что то подобное, обязательно поедем',
	},
	{ id: 11, author: 'Богданова Ольга', text: 'Огромное спасибо педагогам !!!' },
	{
		id: 12,
		author: 'Филинкова Анастасия',
		text: 'Уважаемые учителя, спасибо большое за поездку, всё понравилось!',
	},
	{
		id: 13,
		author: 'Светлана Николаевна',
		text: 'Мы очень рады, что детям понравилось!',
	},
	{
		id: 14,
		author: 'Путилова Анастасия',
		text: 'Спасибо за кучу эмоций и впечатлений! Сыну понравилось 🙌🏻',
	},
];

export const ReviewsList = () => {
	const [reviews, setReviews] = useState<ReviewEntity[]>(mockReviews);
	const { width } = useWindowSize();
	const listRef = useRef<HTMLUListElement>(null);

	const isSlider = width && width > 440;
	const isSmallSlider = width && width <= 510;
	const isMediumSlider = width && width <= 800;

	return (
		<>
			{isSlider ? (
				<ListSlider
					className={styles.listSlider}
					listRef={listRef}
					buttonOffset={isSmallSlider ? 52 : isMediumSlider ? 86 : 32}
					gradientWidth={300}
					items={reviews}
					setItems={setReviews}
				>
					<ul className={styles.reviewsList} ref={listRef}>
						{reviews.map(review => (
							<Review key={review.id} {...review} />
						))}
					</ul>
				</ListSlider>
			) : (
				<Expandable>
					<ul className={styles.reviewsList}>
						{mockReviews.map(review => (
							<Review key={review.id} {...review} />
						))}
					</ul>
				</Expandable>
			)}
		</>
	);
};
