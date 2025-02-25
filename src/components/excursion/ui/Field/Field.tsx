import { FieldProps } from '../../../../types';
import styles from './Field.module.css';

export const Field = ({ fieldKey, fieldValue }: FieldProps) => {
	return (
		<li className={styles.field}>
			<span className={styles.key}>{fieldKey}:</span>
			<span className={styles.value}>{fieldValue}</span>
		</li>
	);
};
