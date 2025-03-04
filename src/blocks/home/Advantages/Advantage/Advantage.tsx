import { AdvantageEntity } from '../../../../types';
import styles from './Advantage.module.css';

export const Advantage = ({ ...advantage }: AdvantageEntity) => {
	const { text, Icon } = advantage;

	return (
		<li className={styles.advantage}>
			<div className={styles.container}>
				<div className={styles.iconWrapper}>{Icon}</div>
				<span className={styles.text}>{text}</span>
			</div>
		</li>
	);
};
