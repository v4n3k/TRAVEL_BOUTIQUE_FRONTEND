import { GridList } from '../../ui/GridList/GridList';
import { CategoriesProps } from '../Categories';
import { CategoryCard } from './CategoryCard/CategoryCard';

export interface CategoriesListProps
	extends Pick<
		CategoriesProps,
		'categories' | 'withName' | 'withIcon' | 'textUnderImage'
	> {}

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
