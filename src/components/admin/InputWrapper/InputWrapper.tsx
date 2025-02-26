import { InputWrapperProps } from '../../../types';
import styles from './InputWrapper.module.css';

export const InputWrapper = ({
	className,
	children,
	...props
}: InputWrapperProps) => {
	return (
		<div className={[styles.inputWrapper, className].join(' ')} {...props}>
			{children}
		</div>
	);
};
