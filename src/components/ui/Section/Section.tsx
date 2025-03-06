import { SectionProps } from '../../../types';
import { cn } from '../../../utils/cn';
import styles from './Section.module.css';

export const Section = ({ children, className, ...props }: SectionProps) => {
	return (
		<section className={cn(styles.section, className)} {...props}>
			{children}
		</section>
	);
};
