import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { excursionApi } from '../../api/excursion/excursionApi';
import { GridList } from '../../components/category/ui/GridList/GridList';
import { ImageCard } from '../../components/category/ui/ImageCard/ImageCard';
import { Page } from '../../components/ui/Page/Page';
import { Section } from '../../components/ui/Section/Section';
import { Title } from '../../components/ui/Title/Title';
import { useSearchStore } from '../../stores/useSearchStore';
import { RouteBase } from '../../types/routes';

const SearchedExcursionsPage = () => {
	const navigate = useNavigate();
	const searchQuery = useSearchStore(state => state.searchQuery);

	const { data: searchedExcursions } = useQuery({
		queryKey: ['searchedExcursions', searchQuery],
		queryFn: () => excursionApi.getBySearchWithCities(searchQuery),
	});

	const handleClick = (id: number, categoryName: string) => {
		localStorage.setItem('categoryName', categoryName);
		navigate(`${RouteBase.EXCURSION}/${id}`);
	};

	return (
		<Page>
			<Section>
				<Title>Поиск по экскурсиям</Title>
				<GridList gapSize='m'>
					{searchedExcursions?.length ? (
						searchedExcursions?.map(excursion => (
							<ImageCard
								{...excursion}
								key={excursion.id}
								withIcon={false}
								nameSize='m'
								radiusSize='m'
								onClick={() =>
									handleClick(excursion.id, excursion?.city || excursion.name)
								}
							/>
						))
					) : (
						<p>Ничего не найдено</p>
					)}
				</GridList>
			</Section>
		</Page>
	);
};

export default SearchedExcursionsPage;
