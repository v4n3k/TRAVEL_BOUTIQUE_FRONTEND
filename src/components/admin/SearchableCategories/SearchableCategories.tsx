import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchableCategoriesProps } from '../../../types/props';
import { RouteBase, RouteName } from '../../../types/routes';
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
	const navigate = useNavigate();

	const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const saveCategoryName = (categoryName: string) => {
		localStorage.setItem('categoryName', categoryName);
	};

	const handleCardClick = useCallback(
		(categoryName: string) => {
			if (clickTimeoutRef.current) {
				clearTimeout(clickTimeoutRef.current);
			}

			clickTimeoutRef.current = setTimeout(() => {
				saveCategoryName(categoryName);
				navigate(RouteName.ADMIN_CATEGORY);
				clickTimeoutRef.current = null;
			}, 200);
		},
		[navigate]
	);

	const handleCardDoubleClick = useCallback(
		(id: number, categoryName: string) => {
			if (clickTimeoutRef.current) {
				clearTimeout(clickTimeoutRef.current);
				clickTimeoutRef.current = null;
			}

			saveCategoryName(categoryName);
			navigate(`${RouteBase.ADMIN_EDIT_CATEGORY}/${id}`);
		},
		[navigate]
	);

	const searchableList = (
		<SearchableList
			title={title}
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
						onDoubleClick={() =>
							handleCardDoubleClick(category.id, category.name)
						}
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
