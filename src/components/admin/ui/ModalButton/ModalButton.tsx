import { ModalButtonProps } from '../../../../types';
import { cn } from '../../../../utils/cn';
import { Button } from '../../../ui';
import styles from './ModalButton.module.css';

export const ModalButton = ({
	children,
	className,
	rootClassName,
	...props
}: ModalButtonProps) => {
	return (
		<Button
			className={cn(styles.modalButton, className)}
			rootClassName={cn(styles.modalButtonRoot, rootClassName)}
			{...props}
		>
			{children}
		</Button>
	);
};
