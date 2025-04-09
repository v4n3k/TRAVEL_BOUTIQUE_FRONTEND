import { useNavigate } from 'react-router-dom';
import { CategoryEntity, RouteName } from '../../../../../types';
import { ImageCard } from '../../../ui/ImageCard/ImageCard';
import { CategoriesProps } from '../../Categories';

export interface CategoryCardProps
	extends Pick<CategoryEntity, 'id' | 'name' | 'imgSrc'>,
		Pick<CategoriesProps, 'withName' | 'withIcon' | 'textUnderImage'> {}

export const CategoryCard = ({
	name,
	imgSrc,
	withName,
	withIcon,
	textUnderImage,
}: CategoryCardProps) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(RouteName.CATEGORY);
		localStorage.setItem('categoryName', name);
	};

	return (
		<ImageCard
			name={name}
			imgSrc={imgSrc}
			withName={withName}
			withIcon={withIcon}
			textUnderImage={textUnderImage}
			onClick={handleClick}
		/>
	);
};
