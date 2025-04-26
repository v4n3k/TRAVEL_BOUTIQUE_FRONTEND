import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { excursionApi } from '../../api/excursion/excursionApi';
import { GridList, ImageCard } from '../../components/category';
import { Page, Section, Title } from '../../components/ui';
import { useSearchStore } from '../../stores/useSearchStore';
import { RouteBase } from '../../types';

export const SearchedExcursionsPage = () => {
	const navigate = useNavigate();
	const searchQuery = useSearchStore(state => state.searchQuery);

	const { data: searchedExcursions } = useQuery({
		queryKey: ['searchedExcursions'],
		queryFn: () => excursionApi.getBySearchWithCities(searchQuery),
	});

	const handleClick = (id: number) => {
		navigate(`${RouteBase.EXCURSION}/${id}`);
	};

	return (
		<Page>
			<Section>
				<Title>Поиск по экскурсиям</Title>
				<GridList gapSize='m'>
					{searchedExcursions?.map(excursion => (
						<ImageCard
							{...excursion}
							key={excursion.id}
							withIcon={false}
							nameSize='m'
							radiusSize='m'
							onClick={() => handleClick(excursion.id)}
						/>
					))}
				</GridList>
			</Section>
		</Page>
	);
};
