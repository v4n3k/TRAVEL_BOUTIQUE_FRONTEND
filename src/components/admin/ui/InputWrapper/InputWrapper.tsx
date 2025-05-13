import { InputWrapperProps } from '../../../../types/props';
import { cn } from '../../../../utils/cn';
import styles from './InputWrapper.module.css';

export const InputWrapper = ({
	className,
	children,
	size = 'm',
	...props
}: InputWrapperProps) => {
	return (
		<div
			className={cn(styles.inputWrapper, styles[size], className)}
			{...props}
		>
			{children}
		</div>
	);
};
