import { useNavigate } from 'react-router-dom';
import { RouteName, SearchableCategoriesProps } from '../../../types';
import { CategoryCard } from '../../category/Categories/CategoriesList/CategoryCard/CategoryCard';
import { GridList } from '../../category/ui/GridList/GridList';
import { Expandable } from '../../ui';
import { SearchableList } from '../ui/SearchableList/SearchableList';

export const SearchableCategories = ({
	categories,
	searchQuery,
	setSearchQuery,
	onAdd,
	withName,
	withIcon,
	nameSize,
	expandable = false,
	collapsedHeight,
}: SearchableCategoriesProps) => {
	const navigate = useNavigate();

	const handleCardClick = (categoryName: string) => {
		navigate(RouteName.ADMIN_CATEGORY);
		localStorage.setItem('categoryName', categoryName);
	};

	const searchableList = (
		<SearchableList
			title='Предпросмотр карточек категорий'
			buttonText='Добавить категорию'
			searchQuery={searchQuery}
			setSearchQuery={setSearchQuery}
			onAdd={onAdd}
		>
			<GridList gapSize='m'>
				{categories.map(category => (
					<CategoryCard
						key={category.id}
						{...category}
						withName={withName}
						withIcon={withIcon}
						nameSize={nameSize}
						radiusSize='m'
						onClick={() => handleCardClick(category.name)}
					/>
				))}
			</GridList>
		</SearchableList>
	);

	return (
		<>
			{expandable ? (
				<Expandable collapsedHeight={collapsedHeight}>
					{searchableList}
				</Expandable>
			) : (
				searchableList
			)}
		</>
	);
};
