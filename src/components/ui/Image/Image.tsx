import { ImageProps } from '../../../types';
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
			className={[styles.image, className].join(' ')}
			src={src}
			alt={alt}
			loading={loading}
			{...props}
		/>
	);
};
