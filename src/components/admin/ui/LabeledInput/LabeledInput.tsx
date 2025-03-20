import { LabeledInputProps } from '../../../../types';
import { cn } from '../../../../utils/cn';
import styles from './LabeledInput.module.css';

export const LabeledInput = ({
	label,
	renderInput,
	direction = 'row',
	className,
	...props
}: LabeledInputProps) => {
	return (
		<div
			className={cn(styles.labeledInput, styles[direction], className)}
			{...props}
		>
			<label className={styles.label}>{label}:</label>
			{renderInput()}
		</div>
	);
};
