import { TextContainerProps } from '../../../types';
import { cn } from '../../../utils/cn';
import styles from './TextContainer.module.css';

export const TextContainer = ({
	children,
	className,
	...props
}: TextContainerProps) => {
	return (
		<div className={cn(styles.textContainer, className)} {...props}>
			{children}
		</div>
	);
};
