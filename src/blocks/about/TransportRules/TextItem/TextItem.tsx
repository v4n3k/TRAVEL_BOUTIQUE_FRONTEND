import { TextItemProps } from '../../../../types';
import { cn } from '../../../../utils/cn';
import styles from './TextItem.module.css';

export const TextItem = ({ children, className, ...props }: TextItemProps) => {
	return (
		<li className={cn(styles.textItem, className)} {...props}>
			{children}
		</li>
	);
};
