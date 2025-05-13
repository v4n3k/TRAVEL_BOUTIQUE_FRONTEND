import { ExcursionImageProps } from '../../../../types/props';
import { cn } from '../../../../utils/cn';
import { Image } from '../../../ui/Image/Image';
import styles from './ExcursionImage.module.css';

export const ExcursionImage = ({
	className,
	src,
	...props
}: ExcursionImageProps) => {
	return (
		<Image
			className={cn(styles.excursionImage, className)}
			src={src}
			alt='excursion image'
			{...props}
		/>
	);
};
