import { AdvantageEntity } from '../../../../types/entities';
import styles from './Advantage.module.css';

export const Advantage = ({ text, Icon }: AdvantageEntity) => {
	return (
		<li className={styles.advantage}>
			<div className={styles.container}>
				<div className={styles.iconWrapper}>{Icon}</div>
				<span className={styles.text}>{text}</span>
			</div>
		</li>
	);
};
