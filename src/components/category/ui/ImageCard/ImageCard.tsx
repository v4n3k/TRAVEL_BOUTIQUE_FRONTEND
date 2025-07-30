import { useNavigate } from 'react-router-dom';
import { IconArrowTopRightTransparent } from '../../../../icons/IconArrowTopRightTransparent';
import { IconEdit } from '../../../../icons/IconEdit';
import { ImageCardProps } from '../../../../types/props';
import { RouteBase } from '../../../../types/routes';
import { cn } from '../../../../utils/cn';
import { IconButton } from '../../../ui/IconButton/IconButton';
import { Image } from '../../../ui/Image/Image';
import styles from './ImageCard.module.css';

export const ImageCard = ({
	id,
	imgSrc,
	name,
	withIcon = true,
	withName = true,
	withEditButton = false,
	textUnderImage = false,
	nameSize = 'l',
	radiusSize = 'l',
	onClick,
}: ImageCardProps) => {
	const navigate = useNavigate();

	const handleEditButtonClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		localStorage.setItem('categoryName', name);
		navigate(`${RouteBase.ADMIN_EDIT_CATEGORY}/${id}`);
	};

	return (
		<li className={styles.imageCard} onClick={onClick}>
			<figure
				className={cn(
					styles.figure,
					textUnderImage ? styles.textUnderImageLayout : ''
				)}
			>
				<Image className={cn(styles.image, styles[radiusSize])} src={imgSrc} />
				{!textUnderImage ? (
					<div
						className={cn(
							styles.figcaptionWrapper,
							styles[nameSize],
							!withName ? styles.reverse : ''
						)}
					>
						{withName && (
							<figcaption className={cn(styles.figcaption, styles[nameSize])}>
								{name}
							</figcaption>
						)}

						{withEditButton && (
							<IconButton
								className={styles.editButton}
								onClick={e => handleEditButtonClick(e)}
								Icon={<IconEdit size={20} />}
							/>
						)}
						{withIcon && <IconArrowTopRightTransparent />}
					</div>
				) : (
					<div className={styles.figcaptionUnderImageWrapper}>
						{withName && (
							<figcaption className={styles.figcaption}>{name}</figcaption>
						)}
					</div>
				)}
			</figure>
		</li>
	);
};
