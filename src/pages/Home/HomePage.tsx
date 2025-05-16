import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Advantages } from '../../blocks/home/Advantages/Advantages';
import { ChildrenAmount } from '../../blocks/home/ChildrenAmount/ChildrenAmount';
import { Excursions } from '../../blocks/home/Excursions/Excursions';
import { FormAndCareerGuidanceExcursions } from '../../blocks/home/FormAndCareerGuidanceExcursions/FormAndCareerGuidanceExcursions';
import { PaymentMethod } from '../../blocks/home/PaymentMethod/PaymentMethod';
import { Reviews } from '../../blocks/home/Reviews/Reviews';
import { SchoolExcursions } from '../../blocks/home/SchoolExcursions/SchoolExcursions';
import { Button } from '../../components/ui/Button/Button';
import { IconButton } from '../../components/ui/IconButton/IconButton';
import { LoadingBoundary } from '../../components/ui/LoadingBoundary/LoadingBoundary';
import { Page } from '../../components/ui/Page/Page';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { IconArrowTopRight } from '../../icons/IconArrowTopRight';
import { IconPhone } from '../../icons/IconPhone';
import { RouteName } from '../../types/routes';
import styles from './HomePage.module.css';

const HomePage = () => {
	const feedbackFormRef = useRef<HTMLDivElement>(null);
	const isIconHidden = useMediaQuery('(max-width: 560px)');
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(RouteName.CATEGORIES);
	};

	const handleOpenWhatsApp = () => {
		window.open('https://whatsApp.com');
	};

	return (
		<LoadingBoundary>
			<Page className={styles.homePage}>
				<SchoolExcursions ref={feedbackFormRef} />
				<Excursions />
				<FormAndCareerGuidanceExcursions ref={feedbackFormRef} />
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
				<div className={styles.iconPhoneWrapper}>
					<IconButton
						className={styles.iconButton}
						Icon={<IconPhone />}
						onClick={handleOpenWhatsApp}
					/>
				</div>
			</Page>
		</LoadingBoundary>
	);
};

export default HomePage;
