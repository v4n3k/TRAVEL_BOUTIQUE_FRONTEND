import { ModalButtonProps } from '../../../../types/props';
import { cn } from '../../../../utils/cn';
import { Button } from '../../../ui/Button/Button';

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
