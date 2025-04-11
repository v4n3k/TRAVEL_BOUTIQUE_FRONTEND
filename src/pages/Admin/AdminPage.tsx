import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categoryApi } from '../../api/category/categoryApi';
import { AdminPanelTitle, SearchableCategories } from '../../components/admin';
import { Expandable, Page } from '../../components/ui';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { RouteName } from '../../types';
import styles from './AdminPage.module.css';

export const AdminPage = () => {
	const [collapsedHeight, setCollapsedHeight] = useState(740);
	const isXLScreen = useMediaQuery('(min-width: 1481px)');
	const isLScreen = useMediaQuery('(min-width: 700px) and (max-width: 1480px)');
	const isMScreen = useMediaQuery('(min-width: 600px) and (max-width: 699px)');
	const isSScreen = useMediaQuery('(min-width: 440px) and (max-width: 599px)');
	const isXSScreen = useMediaQuery('(max-width: 439px)');

	const navigate = useNavigate();

	useEffect(() => {
		if (isXLScreen) {
			setCollapsedHeight(740);
		} else if (isLScreen) {
			setCollapsedHeight(620);
		} else if (isMScreen) {
			setCollapsedHeight(950);
		} else if (isSScreen) {
			setCollapsedHeight(810);
		} else if (isXSScreen) {
			setCollapsedHeight(790);
		} else {
			setCollapsedHeight(740);
		}
	}, []);

	const { data: categories } = useQuery({
		queryKey: ['categories'],
		queryFn: () => categoryApi.getAll(),
	});

	if (!categories) return <></>;

	const handleNavigate = () => {
		navigate(RouteName.ADMIN_CREATE_NEW_CATEGORY);
	};

	const handleCitiesClick = () => {
		localStorage.setItem('categoryType', 'cities');
		handleNavigate();
	};

	const handleCareerGuidanceClick = () => {
		localStorage.setItem('categoryType', 'careerGuidance');
		handleNavigate();
	};

	const handleWeekendsClick = () => {
		localStorage.setItem('categoryType', 'weekends');
		handleNavigate();
	};

	return (
		<Page>
			<AdminPanelTitle />

			<div className={styles.container}>
				<Expandable collapsedHeight={collapsedHeight}>
					<SearchableCategories
						categories={[
							...categories?.cities,
							...categories?.cities,
							...categories?.cities,
						]}
						onAdd={handleCitiesClick}
						withIcon={false}
						nameSize='m'
					/>
				</Expandable>

				<SearchableCategories
					categories={categories?.careerGuidance}
					onAdd={handleCareerGuidanceClick}
					withName={false}
					nameSize='s'
				/>

				<Expandable>
					<SearchableCategories
						categories={[
							...categories?.weekends,
							...categories?.weekends,
							...categories?.weekends,
						]}
						onAdd={handleWeekendsClick}
						withIcon={false}
						nameSize='s'
					/>
				</Expandable>
			</div>
		</Page>
	);
};
