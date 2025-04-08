import { IconArrowTopRightTransparent } from '../../../../icons/IconArrowTopRightTransparent';
import { cn } from '../../../../utils/cn';
import { Image } from '../../../ui';
import styles from './ImageCard.module.css';

export interface ImageCardProps {
	imgSrc: string;
	name: string;
	withIcon?: boolean;
	withName?: boolean;
	onClick: () => void;
}

export const ImageCard = ({
	imgSrc,
	name,
	withIcon = true,
	withName = true,
	onClick,
}: ImageCardProps) => {
	return (
		<li className={styles.imageCard} onClick={onClick}>
			<figure className={styles.figure}>
				<Image className={styles.image} src={imgSrc} />
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
			</figure>
		</li>
	);
};
