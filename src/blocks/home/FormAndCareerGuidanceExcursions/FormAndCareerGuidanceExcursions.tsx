import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import img from '../../../../assets/images/Rectangle 33.png';
import { excursionApi } from '../../../api/excursion/excursionApi';
import { IconButton, Image, TagsList } from '../../../components/ui';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { IconArrowTopRight } from '../../../icons/IconArrowTopRight';
import {
	FormAndCareerGuidanceExcursionsProps,
	RouteName,
} from '../../../types';
import { FeedbackForm } from './FeedbackForm/FeedbackForm';
import styles from './FormAndCareerGuidanceExcursions.module.css';

export const FormAndCareerGuidanceExcursions = ({
	ref,
}: FormAndCareerGuidanceExcursionsProps) => {
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
		if (isLargeScreen) {
			return 2;
		} else if (isMediumScreen) {
			return 3;
		} else if (isSmallScreen) {
			return 4;
		} else {
			return 2;
		}
	};

	const tagsListRows = getTagsListRows();

	const handleArrowClick = () => {
		navigate(RouteName.CATEGORIES, { state: { scrollToCareerGuidance: true } });
	};

	const handleTagClick = (city: string) => {
		navigate(RouteName.CATEGORY);
		localStorage.setItem('categoryName', city);
	};

	if (!cities) return;

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
							onClick={handleArrowClick}
						/>
					</div>

					<TagsList
						tags={cities}
						size='s'
						rowsAmount={tagsListRows}
						onTagClick={handleTagClick}
					/>
				</div>
				<Image className={styles.img} src={img} />
			</div>
		</section>
	);
};
