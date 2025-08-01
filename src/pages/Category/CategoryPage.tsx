import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { excursionApi } from '../../api/excursion/excursionApi';
import { BreadcrumbsWithNavButton } from '../../components/admin/ui/BreadcrumbsWithNavButton/BreadcrumbsWithNavButton';
import { GridList } from '../../components/category/ui/GridList/GridList';
import { ImageCard } from '../../components/category/ui/ImageCard/ImageCard';
import { Page } from '../../components/ui/Page/Page';
import { Section } from '../../components/ui/Section/Section';
import { Title } from '../../components/ui/Title/Title';
import { RouteBase } from '../../types/routes';
import styles from './CategoryPage.module.css';

const CategoryPage = () => {
	const navigate = useNavigate();

	const categoryName = localStorage.getItem('categoryName');

	const { data: excursions } = useQuery({
		queryKey: ['excursions', categoryName],
		queryFn: () => excursionApi.getByCategoryName(String(categoryName)),
	});

	const handleClick = (id: number) => {
		navigate(`${RouteBase.EXCURSION}/${id}`);
	};

	return (
		<Page>
			<BreadcrumbsWithNavButton />
			<Section>
				<Title className={styles.title}>{categoryName}</Title>
				<GridList>
					{excursions?.map(excursion => (
						<ImageCard
							id={excursion.id}
							key={excursion.id}
							imgSrc={excursion.imgSrc}
							name={excursion.name}
							onClick={() => handleClick(excursion.id)}
						/>
					))}
				</GridList>
			</Section>
		</Page>
	);
};

export default CategoryPage;
