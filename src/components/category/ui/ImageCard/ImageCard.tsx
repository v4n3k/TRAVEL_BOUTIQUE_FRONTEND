import { IconArrowTopRightTransparent } from '../../../../icons/IconArrowTopRightTransparent';
import { ImageCardProps } from '../../../../types/props';
import { cn } from '../../../../utils/cn';
import { Image } from '../../../ui/Image/Image';
import styles from './ImageCard.module.css';

export const ImageCard = ({
	imgSrc,
	name,
	withIcon = true,
	withName = true,
	textUnderImage = false,
	nameSize = 'l',
	radiusSize = 'l',
	onClick,
}: ImageCardProps) => {
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
