import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import mainImage from '../../../../assets/images/Frame 168@2x.png';
import purpleHouse from '../../../../assets/images/Rectangle 28.png';
import kremlinImage from '../../../../assets/images/Rectangle 5.png';
import { excursionApi } from '../../../api/excursion/excursionApi';
import { IconButton, Image, Section, TagsList } from '../../../components/ui';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { IconArrowTopRight } from '../../../icons/IconArrowTopRight';
import { RouteName, SchoolExcursionsProps, TagEntity } from '../../../types';
import styles from './SchoolExcursions.module.css';

const cities: TagEntity[] = [
	{ id: 1, name: 'Санкт-Петербург' },
	{ id: 2, name: 'Казань' },
	{ id: 3, name: 'Реж' },
	{ id: 4, name: 'Карелия' },
	{ id: 5, name: 'Сочи' },
	{ id: 6, name: 'Екатеринбург' },
	{ id: 7, name: 'Тюмень' },
];

const citiesOnSmallScreen: TagEntity[] = [
	{ id: 1, name: 'Санкт-Петербург' },
	{ id: 2, name: 'Казань' },
	{ id: 3, name: 'Реж' },
	{ id: 4, name: 'Сочи' },
	{ id: 5, name: 'Беларусь' },
	{ id: 6, name: 'Екатеринбург' },
	{ id: 7, name: 'Карелия' },
	{ id: 8, name: 'Тюмень' },
	{ id: 9, name: 'Тула' },
	{ id: 10, name: 'Тверь' },
];

export const SchoolExcursions = ({ ref }: SchoolExcursionsProps) => {
	// const isSmallScreen = useMediaQuery('(max-width: 630px)');

	// const tagsToDisplay = isSmallScreen ? citiesOnSmallScreen : cities;
	const navigate = useNavigate();

	const isLargeScreen = useMediaQuery('(min-width: 1440px)');
	const isMediumScreen = useMediaQuery(
		'(min-width: 500px) and (max-width: 1439px)'
	);
	const isSmallScreen = useMediaQuery(
		'(min-width: 1px) and (max-width: 499px)'
	);

	const { data: cities } = useQuery({
		queryKey: ['cities'],
		queryFn: () => excursionApi.getExcursionsCities(),
	});

	const getTagsListRows = () => {
		return 3;
	};

	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	const handleTagClick = (city: string) => {
		navigate(RouteName.CATEGORY);
		localStorage.setItem('categoryName', city);
	};

	const tagsListRows = getTagsListRows();

	if (!cities) return;

	return (
		<Section>
			<h1 className={styles.title}>
				Школьные<span>экскурсии</span>
			</h1>

			<div className={styles.wrapper}>
				<div className={styles.imagesContainer}>
					<Image className={styles.mainImage} src={mainImage} />
					<Image
						className={styles.kremlinImageOnMediumScreen}
						src={kremlinImage}
					/>
				</div>

				<div className={styles.container}>
					<div className={styles.rowContainer}>
						<div className={styles.helpInChoosing}>
							<div className={styles.titleContainer}>
								<h2>Помощь в выборе тура</h2>
								<IconButton
									className={styles.icon}
									Icon={<IconArrowTopRight />}
									onClick={handleClick}
								/>
							</div>
							<p>
								Наши методисты составляют уникальные и индивидуальные маршруты,
								учитывая все предпочтения клиентов. С удовольствием
								проконсультируем вас детально!
							</p>
						</div>
						<Image className={styles.kremlinImage} src={kremlinImage} />
					</div>

					<div className={styles.rowContainer}>
						<div className={styles.cities}>
							<TagsList
								tags={cities}
								rowsAmount={tagsListRows}
								onTagClick={handleTagClick}
							/>
						</div>

						<div className={styles.bottomImagesContainer}>
							<Image
								className={styles.kremlinImageOnSmallScreen}
								src={kremlinImage}
							/>
							<Image className={styles.purpleHouseImage} src={purpleHouse} />
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};
