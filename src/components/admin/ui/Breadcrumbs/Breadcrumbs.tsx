import { BreadcrumbsProps } from '../../../../types';
import { cn } from '../../../../utils/cn';
import styles from './Breadcrumbs.module.css';

export const Breadcrumbs = ({
	crumbs,
	className,
	...props
}: BreadcrumbsProps) => {
	return (
		<ul className={cn(styles.breadcrumbs, className)} {...props}>
			{crumbs.map((crumb, index) => (
				<li className={styles.crumb} key={crumb.id}>
					<span>{crumb.label}</span>

					{index < crumbs.length - 1 && <span className={styles.divider} />}
				</li>
			))}
		</ul>
	);
};
