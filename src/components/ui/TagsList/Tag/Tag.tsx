import { TagProps } from '../../../../types';
import { cn } from '../../../../utils/cn';
import styles from './Tag.module.css';

export const Tag = ({ children, size = 'm', ...props }: TagProps) => {
	return (
		<li className={cn(styles.tag, styles[size])} {...props}>
			<span>{children}</span>
		</li>
	);
};
