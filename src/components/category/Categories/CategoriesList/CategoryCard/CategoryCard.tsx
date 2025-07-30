import { useNavigate } from 'react-router-dom';

import { CategoryCardProps } from '../../../../../types/props';
import { RouteName } from '../../../../../types/routes';
import { ImageCard } from '../../../ui/ImageCard/ImageCard';

export const CategoryCard = ({
	id,
	name,
	imgSrc,
	withName,
	withIcon,
	withEditButton,
	textUnderImage,
	nameSize,
	radiusSize,
	onClick,
}: CategoryCardProps) => {
	const navigate = useNavigate();

	const handleClick = () => {
		localStorage.setItem('categoryName', name);
		navigate(RouteName.CATEGORY);
	};

	return (
		<ImageCard
			id={id}
			name={name}
			imgSrc={imgSrc}
			withName={withName}
			withIcon={withIcon}
			withEditButton={withEditButton}
			textUnderImage={textUnderImage}
			nameSize={nameSize}
			radiusSize={radiusSize}
			onClick={onClick || handleClick}
		/>
	);
};
