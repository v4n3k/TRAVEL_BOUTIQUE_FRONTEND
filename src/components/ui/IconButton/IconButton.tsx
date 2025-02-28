import { IconButtonProps } from '../../../types';
import { cn } from '../../../utils/cn';
import styles from './IconButton.module.css';

export const IconButton = ({ className, Icon, ...props }: IconButtonProps) => {
	return (
		<button className={cn(styles.iconButton, className)} {...props}>
			{Icon}
		</button>
	);
};
