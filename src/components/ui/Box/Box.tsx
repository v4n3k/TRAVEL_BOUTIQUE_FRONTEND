import { BoxProps } from '../../../types/props';
import { cn } from '../../../utils/cn';
import styles from './Box.module.css';

export const Box = ({ children, className, ...props }: BoxProps) => {
	return (
		<div className={cn(styles.box, className)} {...props}>
			{children}
		</div>
	);
};
