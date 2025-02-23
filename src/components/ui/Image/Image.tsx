import { ImageProps } from '../../../types';
import styles from './Image.module.css';

export const Image = ({ src, alt, loading = 'lazy', ...props }: ImageProps) => {
	const { className, ...otherProps } = props;

	return (
		<img
			className={[styles.image, className].join(' ')}
			src={src}
			alt={alt}
			loading={loading}
			{...otherProps}
		/>
	);
};
