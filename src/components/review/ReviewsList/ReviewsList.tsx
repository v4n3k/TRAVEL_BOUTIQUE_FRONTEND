import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { IconArrow } from '../../../icons/IconArrow';
import { cn } from '../../../utils/cn';
import { Expandable } from '../../ui';
import { Review } from './Review/Review';
import styles from './ReviewsList.module.css';

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
];

export const NextArrow = ({ className, onClick }: any) => (
	<button
		className={cn(styles.slickArrow, styles.slickNext, className)}
		onClick={onClick}
	>
		<IconArrow direction='right' />
	</button>
);

export const PrevArrow = ({ className, onClick }: any) => (
	<button
		className={cn(styles.slickArrow, styles.slickPrev, className)}
		onClick={onClick}
	>
		<IconArrow direction='left' />
	</button>
);

export const ReviewsList = () => {
	const { width } = useWindowSize();

	const isSlider = width !== undefined && width > 600;

	const settings = {
		dots: false,
		infinite: true,
		centerMode: true,
		speed: 500,
		initialSlide: 1,
		slidePerRow: 1,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1480,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<>
			{isSlider ? (
				<div className={styles.sliderContainer}>
					<Slider {...settings}>
						<div className={styles.reviewsBlock}>
							<Review
								id={1}
								author='Светлана Николаевна'
								text='Мы очень рады, что детям понравилось!'
								marginBottom={32}
							/>
							<Review
								id={2}
								author='Путилова Анастасия'
								text='Спасибо за кучу эмоций и впечатлений! Сыну понравилось 🙌🏻'
							/>
						</div>
						<Review
							id={3}
							author='Панина Марина'
							text='Да очень здорово было. Дочь в восторге. Ножки устали говорит,но это приятная и усталость. Столько впечатлений!!! Если будет ещё что то подобное, обязательно поедем'
						/>
						<div className={styles.reviewsBlock}>
							<Review
								id={4}
								author='Богданова Ольга'
								text='Огромное спасибо педагогам !!!'
								marginBottom={32}
							/>
							<Review
								id={5}
								author='Филинкова Анастасия'
								text='Уважаемые учителя, спасибо большое за поездку, всё понравилось!'
							/>
						</div>
					</Slider>
				</div>
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
