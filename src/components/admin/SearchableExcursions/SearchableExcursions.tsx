import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { excursionApi } from '../../../api/excursion/excursionApi';
import { useDebounce } from '../../../hooks/useDebounce';
import {
	RouteBase,
	RouteName,
	SearchableExcursionsProps,
} from '../../../types';
import { ImageCard } from '../../category';
import { GridList } from '../../category/ui/GridList/GridList';
import { SearchableList } from '../ui/SearchableList/SearchableList';

export const SearchableExcursions = ({
	className,
}: SearchableExcursionsProps) => {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState('');
	const debSearchQuery = useDebounce(searchQuery);

	const categoryName = localStorage.getItem('categoryName') as string;

	const { data: excursions } = useQuery({
		queryKey: ['excursions', categoryName],
		queryFn: () => excursionApi.getByCategoryName(categoryName),
	});

	const { data: searchedExcursions } = useQuery({
		queryKey: ['searchedExcursions', debSearchQuery],
		queryFn: () => excursionApi.getBySearch(debSearchQuery),
		enabled: !!debSearchQuery,
	});

	const handleClick = (id: number) => {
		navigate(`${RouteBase.ADMIN_EDIT_EXCURSION}/${id}`);
	};

	const handleAdd = () => {
		navigate(RouteName.ADMIN_CREATE_NEW_EXCURSION);
	};

	const displayedExcursions = debSearchQuery ? searchedExcursions : excursions;

	return (
		<SearchableList
			className={className}
			title={categoryName}
			buttonText='Добавить экскурсию'
			searchQuery={searchQuery}
			setSearchQuery={setSearchQuery}
			withBackButton
			onAdd={handleAdd}
		>
			<GridList gapSize='m'>
				{[...(displayedExcursions || [])].map(excursion => (
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
		</SearchableList>
	);
};
