import { useNavigate } from 'react-router-dom';
import {
	Advantages,
	ChildrenAmount,
	Excursions,
	FormAndCareerGuidanceExcursions,
	Reviews,
	SchoolExcursions,
} from '../../blocks/home';
import { PaymentMethod } from '../../blocks/home/PaymentMethod/PaymentMethod';
import { Button, IconButton, Page } from '../../components/ui';
import { IconArrowTopRight } from '../../icons/IconArrowTopRight';
import { IconPhone } from '../../icons/IconPhone';
import { RouteName } from '../../types';
import styles from './HomePage.module.css';

export const HomePage = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(RouteName.EXCURSIONS);
	};

	return (
		<Page>
			<SchoolExcursions />
			<Excursions />
			<FormAndCareerGuidanceExcursions />
			<div className={styles.iconPhoneWrapper}>
				<IconButton className={styles.iconButton} Icon={<IconPhone />} />
			</div>
			<Advantages />
			<ChildrenAmount />
			<PaymentMethod />
			<Reviews />
			<div className={styles.chooseButtonWrapper}>
				<Button
					className={styles.chooseButton}
					backgroundColor='blue-500'
					cornerIcon={<IconArrowTopRight fill='#BDD4E2' />}
					onClick={handleClick}
				>
					Выбрать экскурсию
				</Button>
			</div>
		</Page>
	);
};
