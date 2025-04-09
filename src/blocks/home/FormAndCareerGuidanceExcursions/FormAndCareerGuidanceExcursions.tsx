import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../../../assets/images/Rectangle 33.png';
import { IconButton, Image, TagsList } from '../../../components/ui';
import { IconArrowTopRight } from '../../../icons/IconArrowTopRight';
import {
	FormAndCareerGuidanceExcursionsProps,
	RouteName,
	TagEntity,
} from '../../../types';
import { FeedbackForm } from './FeedbackForm/FeedbackForm';
import styles from './FormAndCareerGuidanceExcursions.module.css';

const citiesOnLargeScreen: TagEntity[] = [
	{ id: 1, name: 'Москва' },
	{ id: 2, name: 'Тюмень' },
	{ id: 3, name: 'Сочи' },
	{ id: 4, name: 'Екатеринбург' },
	{ id: 5, name: 'Казань' },
	{ id: 6, name: 'Санкт-Петербург' },
	{ id: 7, name: 'Тверь' },
	{ id: 8, name: 'Нижний Новгород' },
	{ id: 9, name: 'Реж' },
];

const citiesOnMediumScreen: TagEntity[] = [
	{ id: 1, name: 'Москва' },
	{ id: 2, name: 'Тюмень' },
	{ id: 3, name: 'Екатеринбург' },
	{ id: 4, name: 'Казань' },
	{ id: 5, name: 'Санкт-Петербург' },
];

const citiesOnSmallScreen: TagEntity[] = [
	{ id: 1, name: 'Москва' },
	{ id: 2, name: 'Тюмень' },
	{ id: 3, name: 'Екатеринбург' },
	{ id: 4, name: 'Казань' },
	{ id: 5, name: 'Санкт-Петербург' },
	{ id: 6, name: 'Сочи' },
	{ id: 7, name: 'Беларусь' },
	{ id: 8, name: 'Карелия' },
];

export const FormAndCareerGuidanceExcursions = ({
	ref,
}: FormAndCareerGuidanceExcursionsProps) => {
	const [cities, setCities] = useState<TagEntity[]>(citiesOnLargeScreen);

	const navigate = useNavigate();

	const handleResize = () => {
		if (window.innerWidth <= 1100) {
			setCities(citiesOnSmallScreen);
		} else if (window.innerWidth <= 1480) {
			setCities(citiesOnMediumScreen);
		} else {
			setCities(citiesOnLargeScreen);
		}
	};

	useEffect(() => {
		handleResize();

		const debouncedHandleResize = () => {
			handleResize();
		};

		window.addEventListener('resize', debouncedHandleResize);

		return () => {
			window.removeEventListener('resize', debouncedHandleResize);
		};
	}, [handleResize]);

	const handleClick = () => {
		navigate(RouteName.CATEGORIES, { state: { scrollToCareerGuidance: true } });
	};

	return (
		<section className={styles.formAndCareerGuidanceExcursions}>
			<FeedbackForm ref={ref} />
			<div className={styles.container}>
				<div className={styles.careerGuidanceExcursions}>
					<div className={styles.titleContainer}>
						<h2>
							Профориентационные <br /> экскурсии
						</h2>
						<IconButton
							Icon={<IconArrowTopRight className={styles.icon} />}
							onClick={handleClick}
						/>
					</div>

					<TagsList tags={cities} size='s' />
				</div>
				<Image className={styles.img} src={img} />
			</div>
		</section>
	);
};
