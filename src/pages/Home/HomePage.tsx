import { useRef } from 'react';
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
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { IconArrowTopRight } from '../../icons/IconArrowTopRight';
import { IconPhone } from '../../icons/IconPhone';
import { RouteName } from '../../types';
import styles from './HomePage.module.css';

export const HomePage = () => {
	const isIconHidden = useMediaQuery('(max-width: 560px)');

	const feedbackFormRef = useRef<HTMLDivElement>(null);

	const navigate = useNavigate();

	const handleClick = () => {
		navigate(RouteName.CATEGORIES);
	};

	const handleOpenWhatsApp = () => {
		window.open('https://whatsApp.com');
	};

	return (
		<Page>
			<SchoolExcursions ref={feedbackFormRef} />
			<Excursions />
			<FormAndCareerGuidanceExcursions ref={feedbackFormRef} />
			<div className={styles.iconPhoneWrapper}>
				<IconButton
					className={styles.iconButton}
					Icon={<IconPhone />}
					onClick={handleOpenWhatsApp}
				/>
			</div>
			<Advantages />
			<ChildrenAmount />
			<PaymentMethod />
			<Reviews />
			<div className={styles.chooseButtonWrapper}>
				<Button
					className={styles.chooseButton}
					backgroundColor='blue-500'
					cornerIcon={!isIconHidden && <IconArrowTopRight fill='#BDD4E2' />}
					onClick={handleClick}
				>
					Выбрать экскурсию
				</Button>
			</div>
		</Page>
	);
};
