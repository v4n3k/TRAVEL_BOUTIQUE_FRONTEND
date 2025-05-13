import { TitleProps } from '../../../types/props';
import { cn } from '../../../utils/cn';
import styles from './Title.module.css';

export const Title = ({
	children,
	className,
	as = 'h2',
	...props
}: TitleProps) => {
	const HeadingTag = as;

	return (
		<HeadingTag className={cn(styles.title, className)} {...props}>
			{children}
		</HeadingTag>
	);
};
