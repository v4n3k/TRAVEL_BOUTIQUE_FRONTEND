import { FieldProps } from '../../../../types/props';
import { cn } from '../../../../utils/cn';
import styles from './Field.module.css';

export const Field = ({
	fieldKey,
	fieldValue,
	width = 'fitContent',
	valueBackground = 'transparent',
	className,
	...props
}: FieldProps) => {
	return (
		<li className={cn(styles.field, className, styles[width])} {...props}>
			<span className={styles.key}>{fieldKey}:</span>
			<span className={cn(styles.value, styles[valueBackground])}>
				{fieldValue}
			</span>
		</li>
	);
};
