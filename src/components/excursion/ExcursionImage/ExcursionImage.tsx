import { ExcursionImageProps } from '../../../types';
import { Image } from '../../ui';
import styles from './ExcursionImage.module.css';

export const ExcursionImage = ({ src }: ExcursionImageProps) => {
	return (
		<Image className={styles.excursionImage} src={src} alt='excursion image' />
	);
};
