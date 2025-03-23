import { LabeledInputProps } from '../../../../types';
import { cn } from '../../../../utils/cn';
import styles from './LabeledInput.module.css';

export const LabeledInput = ({
	label,
	renderInput,
	className,
	direction = 'row',
	size = 'm',
	...props
}: LabeledInputProps) => {
	return (
		<div
			className={cn(styles.labeledInput, styles[direction], className)}
			{...props}
		>
			<label className={cn(styles.label, styles[size])}>{label}:</label>
			{renderInput()}
		</div>
	);
};
