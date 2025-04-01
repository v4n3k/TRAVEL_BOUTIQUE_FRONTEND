import { TransportVariantProps } from '../../../../types';
import styles from './TransportVariant.module.css';

export const TransportVariant = ({
	title,
	Icon,
	renderDescription,
}: TransportVariantProps) => {
	return (
		<div className={styles.transportVariant}>
			<div className={styles.titleContainer}>
				<h3 className={styles.title}>{title}</h3>
				{Icon}
			</div>
			<p className={styles.description}>{renderDescription()}</p>
		</div>
	);
};
