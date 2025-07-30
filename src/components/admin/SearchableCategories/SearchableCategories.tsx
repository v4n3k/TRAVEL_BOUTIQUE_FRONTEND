import { SearchableCategoriesProps } from '../../../types/props';
import { CategoryCard } from '../../category/Categories/CategoriesList/CategoryCard/CategoryCard';
import { GridList } from '../../category/ui/GridList/GridList';
import { Expandable } from '../../ui/Expandable/Expandable';
import { SearchableList } from '../ui/SearchableList/SearchableList';

export const SearchableCategories = <T extends Function>({
	title,
	categories,
	searchQuery,
	setSearchQuery,
	onAdd,
	withName,
	withIcon,
	nameSize,
	expandable = false,
	collapsedHeight,
}: SearchableCategoriesProps<T>) => {
	const searchableList = (
		<SearchableList
			title={title}
			buttonText='Добавить категорию'
			searchQuery={searchQuery}
			setSearchQuery={setSearchQuery}
			onAdd={onAdd}
		>
			<GridList gapSize='m'>
				{categories.length ? (
					categories.map(category => (
						<CategoryCard
							key={category.id}
							{...category}
							withName={withName}
							withIcon={withIcon}
							withEditButton
							nameSize={nameSize}
							radiusSize='m'
						/>
					))
				) : (
					<p>Категории не найдены</p>
				)}
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
