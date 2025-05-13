import { PageProps } from '../../../types/props';
import { cn } from '../../../utils/cn';
import styles from './Page.module.css';

export const Page = ({ children, className, ...props }: PageProps) => {
	return (
		<div className={cn(styles.page, className)} {...props}>
			{children}
		</div>
	);
};
