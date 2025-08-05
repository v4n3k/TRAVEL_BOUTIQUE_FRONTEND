import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import mainImage from '../../../../assets/images/Frame 168.jpg';
import overlayImage from '../../../../assets/images/Frame 180.png';
import purpleHouse from '../../../../assets/images/Rectangle 28.png';
import kremlinImage from '../../../../assets/images/Rectangle 5.png';
import { excursionApi } from '../../../api/excursion/excursionApi';
import { IconButton } from '../../../components/ui/IconButton/IconButton';
import { ImageLink } from '../../../components/ui/ImageLink/ImageLink';
import { Section } from '../../../components/ui/Section/Section';
import { TagsList } from '../../../components/ui/TagsList/TagsList';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { IconArrowTopRight } from '../../../icons/IconArrowTopRight';
import { SchoolExcursionsProps } from '../../../types/props';
import { RouteName } from '../../../types/routes';
import styles from './SchoolExcursions.module.css';

export const SchoolExcursions = ({ ref }: SchoolExcursionsProps) => {
	const navigate = useNavigate();

	const isLargeScreen = useMediaQuery('(min-width: 1100px)');
	const isMediumScreen = useMediaQuery(
		'(min-width: 800px) and (max-width: 1099px)'
	);
	const isSmallScreen = useMediaQuery(
		'(min-width: 400px) and (max-width: 799px)'
	);
	const isXSmallScreen = useMediaQuery(
		'(min-width: 1px) and (max-width: 399px)'
	);

	const { data: cities } = useQuery({
		queryKey: ['cities'],
		queryFn: () => excursionApi.getExcursionsCities(),
	});

	const getTagsListRows = () => {
		if (isLargeScreen) {
			return 3;
		} else if (isMediumScreen) {
			return 5;
		} else if (isSmallScreen) {
			return 3;
		} else if (isXSmallScreen) {
			return 4;
		} else {
			return 3;
		}
	};

	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	const handleTagClick = (city: string) => {
		navigate(RouteName.CATEGORY);
		localStorage.setItem('categoryName', city);
	};

	const tagsListRows = getTagsListRows();

	return (
		<Section>
			<h1 className={styles.title}>
				Школьные<span>экскурсии</span>
			</h1>

			<div className={styles.wrapper}>
				<div className={styles.imagesContainer}>
					<div className={styles.mainImageContainer}>
						<ImageLink
							className={styles.mainImage}
							src={mainImage}
							overlaySrc={overlayImage}
						/>
					</div>
					<ImageLink
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
						<ImageLink className={styles.kremlinImage} src={kremlinImage} />
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
							<ImageLink
								className={styles.kremlinImageOnSmallScreen}
								src={kremlinImage}
							/>
							<ImageLink
								className={styles.purpleHouseImage}
								src={purpleHouse}
							/>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};
