import { IconConnect } from '../../../../icons/IconConnect';
import { ManagerButtonProps } from '../../../../types';
import { cn } from '../../../../utils/cn';
import { Button } from '../../../ui';
import styles from './ManagerButton.module.css';

export const ManagerButton = ({ className, ...props }: ManagerButtonProps) => {
	return (
		<Button
			className={cn(styles.managerButton, className)}
			leftIcon={<IconConnect />}
			backgroundColor='white-50'
			color='blue-500'
			{...props}
		>
			Связаться с менеджером
		</Button>
	);
};
