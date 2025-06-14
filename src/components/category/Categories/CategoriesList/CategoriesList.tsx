import { CategoriesListProps } from '../../../../types/props';
import { GridList } from '../../ui/GridList/GridList';
import { CategoryCard } from './CategoryCard/CategoryCard';

export const CategoriesList = ({
	categories,
	withName,
	withIcon,
	textUnderImage,
}: CategoriesListProps) => {
	return (
		<GridList>
			{categories.map(category => (
				<CategoryCard
					key={category.id}
					{...category}
					withName={withName}
					withIcon={withIcon}
					textUnderImage={textUnderImage}
				/>
			))}
		</GridList>
	);
};
