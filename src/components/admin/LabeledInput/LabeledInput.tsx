import { LabeledInputProps } from '../../../types';
import styles from './LabeledInput.module.css';

export const LabeledInput = ({
	label,
	renderInput,
	direction = 'row',
}: LabeledInputProps) => {
	return (
		<div className={[styles.labeledInput, styles[direction]].join(' ')}>
			<label className={styles.label}>{label}:</label>
			{renderInput()}
		</div>
	);
};
