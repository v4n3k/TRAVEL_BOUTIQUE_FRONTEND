import { TextInputProps } from '../../../types';
import styles from './TextInput.module.css';

export const TextInput = ({
	className,
	type = 'text',
	...props
}: TextInputProps) => {
	return (
		<input
			className={[styles.textInput, className].join(' ')}
			type={type}
			{...props}
		/>
	);
};
