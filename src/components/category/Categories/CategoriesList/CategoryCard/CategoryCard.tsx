import { useNavigate } from 'react-router-dom';
import { CategoryCardProps, RouteName } from '../../../../../types';
import { ImageCard } from '../../../ui/ImageCard/ImageCard';

export const CategoryCard = ({
	name,
	imgSrc,
	withName,
	withIcon,
	textUnderImage,
	nameSize,
	radiusSize,
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
			nameSize={nameSize}
			radiusSize={radiusSize}
			onClick={handleClick}
		/>
	);
};
