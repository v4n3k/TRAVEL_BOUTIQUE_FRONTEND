import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { excursionApi } from '../../api/excursion/excursionApi';
import { BreadcrumbsWithNavButton } from '../../components/admin';
import { Page } from '../../components/ui';
import { useNavHistory } from '../../hooks/useNavHistory';

export const CategoryPage = () => {
	const navHistory = useNavHistory();

	const categoryName = localStorage.getItem('categoryName');

	useEffect(() => console.log(categoryName), []);

	const { data: categories, isLoading } = useQuery({
		queryKey: ['excursions', categoryName],
		queryFn: () => excursionApi.getByCategoryName(String(categoryName)),
	});

	console.log(categories, isLoading);

	return (
		<Page>
			<BreadcrumbsWithNavButton crumbs={navHistory} />
		</Page>
	);
};
