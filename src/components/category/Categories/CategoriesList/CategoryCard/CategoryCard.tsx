import { useNavigate } from 'react-router-dom';

import { CategoryCardProps } from '../../../../../types/props';
import { RouteName } from '../../../../../types/routes';
import { ImageCard } from '../../../ui/ImageCard/ImageCard';

export const CategoryCard = ({
	name,
	imgSrc,
	withName,
	withIcon,
	textUnderImage,
	nameSize,
	radiusSize,
	onClick,
	onDoubleClick,
}: CategoryCardProps) => {
	const navigate = useNavigate();

	const handleClick = () => {
		localStorage.setItem('categoryName', name);
		navigate(RouteName.CATEGORY);
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
			onClick={onClick || handleClick}
			onDoubleClick={onDoubleClick}
		/>
	);
};
