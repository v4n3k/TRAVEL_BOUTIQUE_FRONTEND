import { TextInputProps } from '../../../types';
import styles from './TextInput.module.css';

export const TextInput = ({ className, ...props }: TextInputProps) => {
	return (
		<input
			className={[styles.textInput, className].join(' ')}
			type='text'
			{...props}
		/>
	);
};
