import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categoryApi } from '../../api/category/categoryApi';
import { SearchableCategories } from '../../components/admin/SearchableCategories/SearchableCategories';
import { AdminPanelTitle } from '../../components/admin/ui/AdminPanelTitle/AdminPanelTitle';
import { Page } from '../../components/ui/Page/Page';
import { useDebounce } from '../../hooks/useDebounce';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { RouteName } from '../../types/routes';
import styles from './AdminPage.module.css';

const AdminPage = () => {
	const [collapsedHeight, setCollapsedHeight] = useState(740);
	const isXLScreen = useMediaQuery('(min-width: 1481px)');
	const isLScreen = useMediaQuery('(min-width: 700px) and (max-width: 1480px)');
	const isMScreen = useMediaQuery('(min-width: 600px) and (max-width: 699px)');
	const isSScreen = useMediaQuery('(min-width: 440px) and (max-width: 599px)');
	const isXSScreen = useMediaQuery('(max-width: 439px)');

	const [citiesSearchQuery, setCitiesSearchQuery] = useState('');
	const [careerGuidanceSearchQuery, setCareerGuidanceSearchQuery] = useState(
		''
	);
	const [weekendsSearchQuery, setWeekendsSearchQuery] = useState('');

	const debCitiesSearchQuery = useDebounce(citiesSearchQuery);
	const debCareerGuidanceSearchQuery = useDebounce(careerGuidanceSearchQuery);
	const debWeekendsSearchQuery = useDebounce(weekendsSearchQuery);

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
	}, [isXLScreen, isLScreen, isMScreen, isSScreen, isXSScreen]);

	const { data: initialCategories, isLoading } = useQuery({
		queryKey: ['categories'],
		queryFn: () => categoryApi.getAll(),
	});

	const { data: citiesCategories } = useQuery({
		queryKey: ['citiesCategories', debCitiesSearchQuery],
		queryFn: () => categoryApi.getBySearch('cities', debCitiesSearchQuery),
		enabled: !!debCitiesSearchQuery,
	});

	const { data: careerGuidanceCategories } = useQuery({
		queryKey: ['careerGuidanceCategories', debCareerGuidanceSearchQuery],
		queryFn: () =>
			categoryApi.getBySearch('careerGuidance', debCareerGuidanceSearchQuery),
		enabled: !!debCareerGuidanceSearchQuery,
	});

	const { data: weekendsCategories } = useQuery({
		queryKey: ['weekendsCategories', debWeekendsSearchQuery],
		queryFn: () => categoryApi.getBySearch('weekends', debWeekendsSearchQuery),
		enabled: !!debWeekendsSearchQuery,
	});

	if (isLoading || !initialCategories) return;

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

	const displayedCitiesCategories = debCitiesSearchQuery
		? citiesCategories
		: initialCategories?.cities;
	const displayedCareerGuidanceCategories = debCareerGuidanceSearchQuery
		? careerGuidanceCategories
		: initialCategories?.careerGuidance;
	const displayedWeekendsCategories = debWeekendsSearchQuery
		? weekendsCategories
		: initialCategories?.weekends;

	return (
		<Page>
			<AdminPanelTitle />

			<div className={styles.container}>
				<SearchableCategories
					title='Города'
					categories={[...(displayedCitiesCategories || [])]}
					searchQuery={citiesSearchQuery}
					setSearchQuery={setCitiesSearchQuery}
					onAdd={handleCitiesClick}
					withIcon={false}
					nameSize='m'
					expandable={
						displayedCitiesCategories?.length !== undefined &&
						displayedCitiesCategories?.length > 3
					}
					collapsedHeight={collapsedHeight}
				/>

				<SearchableCategories
					title='Профориентационные экскурсии'
					categories={displayedCareerGuidanceCategories || []}
					searchQuery={careerGuidanceSearchQuery}
					setSearchQuery={setCareerGuidanceSearchQuery}
					onAdd={handleCareerGuidanceClick}
					withName={false}
					nameSize='s'
				/>

				<SearchableCategories
					title='Туры выходного дня'
					categories={[...(displayedWeekendsCategories || [])]}
					searchQuery={weekendsSearchQuery}
					setSearchQuery={setWeekendsSearchQuery}
					onAdd={handleWeekendsClick}
					withIcon={false}
					nameSize='s'
					expandable={
						displayedWeekendsCategories?.length !== undefined &&
						displayedWeekendsCategories?.length > 3
					}
					collapsedHeight={collapsedHeight}
				/>
			</div>
		</Page>
	);
};

export default AdminPage;
