import { forwardRef } from 'react';
import { TextInputProps } from '../../../types/props';
import { cn } from '../../../utils/cn';
import styles from './TextInput.module.css';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
	({ className, type = 'text', ...props }, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				className={cn(styles.textInput, className)}
				{...props}
			/>
		);
	}
);
