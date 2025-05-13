import { TextInputProps } from '../../../types/props';
import { cn } from '../../../utils/cn';
import styles from './TextInput.module.css';

export const TextInput = ({
	className,
	type = 'text',
	...props
}: TextInputProps) => {
	return (
		<input className={cn(styles.textInput, className)} type={type} {...props} />
	);
};
