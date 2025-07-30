import { Link } from 'react-router-dom';
import { ImageLinkProps } from '../../../types/props';
import { cn } from '../../../utils/cn';
import { WHATS_APP_URL } from '../../../utils/redirect';
import { Image } from '../Image/Image';
import styles from './ImageLink.module.css';

export const ImageLink = ({
	className,
	imageClassName,
	src,
	alt,
	loading = 'lazy',
	to = WHATS_APP_URL,
	...props
}: ImageLinkProps) => {
	return (
		<Link className={cn(className, styles.imageLink)} to={to}>
			<Image
				className={cn(imageClassName, styles.image)}
				src={src}
				alt={alt}
				loading={loading}
				{...props}
			/>
		</Link>
	);
};
