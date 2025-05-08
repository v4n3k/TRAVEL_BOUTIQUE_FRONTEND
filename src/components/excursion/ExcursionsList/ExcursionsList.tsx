import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ExcursionListProps } from '../../../types';
import { NextArrow, PrevArrow } from '../../review';
import { ExcursionCard } from './ExcursionCard/ExcursionCard';
import styles from './ExcursionsList.module.css';

export const ExcursionsList = ({ excursions }: ExcursionListProps) => {
	const settings = {
		infinite: true,
		centerMode: true,
		variableWidth: true,
		adaptiveWidth: true,
		speed: 500,
		initialSlide: 0,
		slidesPerRow: 1,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<div className={styles.sliderContainer}>
			<Slider {...settings}>
				{excursions?.map((excursion, index) => (
					<ExcursionCard {...excursion} key={index} data-index={index} />
				))}
			</Slider>
		</div>
	);
};
