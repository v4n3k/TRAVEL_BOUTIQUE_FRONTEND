import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ExcursionListProps } from '../../../types';
import { NextArrow, PrevArrow } from '../../review';
import { ExcursionCard } from './ExcursionCard/ExcursionCard';
import styles from './ExcursionsList.module.css';

export const ExcursionsList = ({ excursions }: ExcursionListProps) => {
	const settings = {
		dots: false,
		infinite: true,
		centerMode: true,
		adaptiveWidth: true,
		speed: 500,
		initialSlide: 1,
		slidePerRow: 1,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [],
	};

	return (
		<div className={styles.sliderContainer}>
			<Slider {...settings}>
				{excursions?.map(excursion => (
					<ExcursionCard {...excursion} key={excursion.id} />
				))}
			</Slider>
		</div>
	);
};
