import { ImageProps } from '../../../types';
import { cn } from '../../../utils/cn';
import styles from './Image.module.css';

export const Image = ({
	className,
	src,
	alt,
	loading = 'lazy',
	...props
}: ImageProps) => {
	return (
		<img
			className={cn(styles.image, className)}
			src={src}
			alt={alt}
			loading={loading}
			{...props}
		/>
	);
};
