import { Link } from 'react-router-dom';
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
				<li
					className={cn(styles.crumb, index === 0 ? styles.first : '')}
					key={crumb.id}
				>
					{index !== 0 && <span className={styles.divider} />}
					<Link to={crumb.to}>{crumb.label}</Link>
				</li>
			))}
		</ul>
	);
};
