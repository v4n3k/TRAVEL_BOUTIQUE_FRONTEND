import { ExcursionImageProps } from '../../../../types';
import { Image } from '../../../ui';
import styles from './ExcursionImage.module.css';

export const ExcursionImage = ({
	className,
	src,
	...props
}: ExcursionImageProps) => {
	return (
		<Image
			className={[styles.excursionImage, className].join(' ')}
			src={src}
			alt='excursion image'
			{...props}
		/>
	);
};
