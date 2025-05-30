import { TagProps } from '../../../../types/props';
import { cn } from '../../../../utils/cn';
import styles from './Tag.module.css';

export const Tag = ({ children, size = 'm', onClick, ...props }: TagProps) => {
	return (
		<li className={cn(styles.tag, styles[size])} onClick={onClick} {...props}>
			<span>{children}</span>
		</li>
	);
};
