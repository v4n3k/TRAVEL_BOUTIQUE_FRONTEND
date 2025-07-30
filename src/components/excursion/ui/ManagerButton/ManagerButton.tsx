import { IconConnect } from '../../../../icons/IconConnect';
import { ManagerButtonProps } from '../../../../types/props';
import { cn } from '../../../../utils/cn';
import { openTelegram } from '../../../../utils/redirect';
import { Button } from '../../../ui/Button/Button';
import styles from './ManagerButton.module.css';

export const ManagerButton = ({
	className,
	rootClassName,
	...props
}: ManagerButtonProps) => {
	return (
		<Button
			className={cn(styles.managerButton, className)}
			rootClassName={rootClassName}
			leftIcon={<IconConnect />}
			backgroundColor='white-50'
			color='blue-500'
			onClick={openTelegram}
			{...props}
		>
			Связаться с менеджером
		</Button>
	);
};
