import { useNavigate } from 'react-router-dom';
import { useNavHistory } from '../../../../hooks/useNavHistory';
import { IconArrowLeft } from '../../../../icons/IconArrowLeft';
import { BreadcrumbsWithNavButtonProps } from '../../../../types/props';
import { cn } from '../../../../utils/cn';
import { IconButton } from '../../../ui/IconButton/IconButton';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import styles from './BreadcrumbsWithNavButton.module.css';

export const BreadcrumbsWithNavButton = ({
	crumbs,
	className,
	...props
}: BreadcrumbsWithNavButtonProps) => {
	const navigate = useNavigate();
	const navHistory = useNavHistory();

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<div className={cn(styles.breadcrumbsWithNavButton, className)} {...props}>
			<IconButton
				className={styles.iconButton}
				Icon={<IconArrowLeft />}
				onClick={handleGoBack}
			/>

			<Breadcrumbs crumbs={navHistory} />
		</div>
	);
};
