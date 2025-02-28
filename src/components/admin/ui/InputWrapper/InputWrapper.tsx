import { InputWrapperProps } from '../../../../types';
import { cn } from '../../../../utils/cn';
import styles from './InputWrapper.module.css';

export const InputWrapper = ({
	className,
	children,
	...props
}: InputWrapperProps) => {
	return (
		<div className={cn(styles.inputWrapper, className)} {...props}>
			{children}
		</div>
	);
};
