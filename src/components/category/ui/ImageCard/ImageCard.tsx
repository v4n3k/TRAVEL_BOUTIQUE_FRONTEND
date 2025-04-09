import { IconArrowTopRightTransparent } from '../../../../icons/IconArrowTopRightTransparent';
import { cn } from '../../../../utils/cn';
import { Image } from '../../../ui';
import styles from './ImageCard.module.css';

export interface ImageCardProps {
	imgSrc: string;
	name: string;
	withIcon?: boolean;
	withName?: boolean;
	textUnderImage?: boolean;
	onClick: () => void;
}

export const ImageCard = ({
	imgSrc,
	name,
	withIcon = true,
	withName = true,
	textUnderImage = false,
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
				<Image className={styles.image} src={imgSrc} />
				{!textUnderImage ? (
					<div
						className={cn(
							styles.figcaptionWrapper,
							!withName ? styles.reverse : ''
						)}
					>
						{withName && (
							<figcaption className={styles.figcaption}>{name}</figcaption>
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
