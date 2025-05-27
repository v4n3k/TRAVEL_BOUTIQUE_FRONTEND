import { Link } from 'react-router-dom';
import { useNavHistory } from '../../../../hooks/useNavHistory';
import { BreadcrumbsProps } from '../../../../types/props';
import { cn } from '../../../../utils/cn';
import styles from './Breadcrumbs.module.css';

export const Breadcrumbs = ({ className, ...props }: BreadcrumbsProps) => {
	const navHistory = useNavHistory();

	return (
		<ul className={cn(styles.breadcrumbs, className)} {...props}>
			{navHistory.map((crumb, index) => (
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
