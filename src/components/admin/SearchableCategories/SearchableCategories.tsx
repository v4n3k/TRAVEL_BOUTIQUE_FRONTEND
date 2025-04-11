import { SearchableCategoriesProps } from '../../../types';
import { CategoryCard } from '../../category/Categories/CategoriesList/CategoryCard/CategoryCard';
import { GridList } from '../../category/ui/GridList/GridList';
import { SearchableList } from '../ui/SearchableList/SearchableList';

export const SearchableCategories = ({
	categories,
	onAdd,
	withName,
	withIcon,
	nameSize,
}: SearchableCategoriesProps) => {
	return (
		<SearchableList
			title='Предпросмотр карточек категорий'
			buttonText='Добавить категорию'
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
					/>
				))}
			</GridList>
		</SearchableList>
	);
};
