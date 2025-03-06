import { TitleProps } from '../../../types';
import styles from './Title.module.css';

export const Title = ({ children, as, ...props }: TitleProps) => {
	const HeadingTag = as;

	return (
		<HeadingTag className={styles.title} {...props}>
			{children}
		</HeadingTag>
	);
};
