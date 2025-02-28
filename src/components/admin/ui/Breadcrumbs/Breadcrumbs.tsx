import { BreadcrumbsProps } from '../../../../types';
import styles from './Breadcrumbs.module.css';

export const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
	return (
		<ul className={styles.breadcrumbs}>
			{crumbs.map((crumb, index) => (
				<li className={styles.crumb} key={crumb.id}>
					<span>{crumb.label}</span>

					{index < crumbs.length - 1 && <span className={styles.divider} />}
				</li>
			))}
		</ul>
	);
};
