import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
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
import { openWhatsApp } from '../../utils/redirect';
import styles from './HomePage.module.css';

const HomePage = () => {
	const feedbackFormRef = useRef<HTMLDivElement>(null);
	const isIconHidden = useMediaQuery('(max-width: 560px)');
	const navigate = useNavigate();

	const handleExcursionClick = () => {
		navigate(RouteName.CATEGORIES);
	};

	const handleTravelClick = () => {
		navigate(RouteName.INTERNATIONAL_TRAVELS);
	};

	return (
		<LoadingBoundary>
			<Page className={styles.homePage}>
				<Helmet>
					<title>
						Бутик Путешествий – Экскурсии для школьников и взрослых | Лучшие
						цены
					</title>
					<meta
						name='description'
						content='Широкий выбор экскурсий для школьников и взрослых по лучшим ценам.  Интересные маршруты, опытные гиды, удобное бронирование. Закажите экскурсию прямо сейчас!'
					/>
					<meta
						name='keywords'
						content='экскурсии, школьники, взрослые, гиды, туры, путешествия, достопримечательности, билеты, заказать экскурсию'
					/>
					<link
						rel='canonical'
						href='https://xn----9sbelapeid5cyafedff1g.xn--p1ai/'
					/>
				</Helmet>

				<SchoolExcursions ref={feedbackFormRef} />
				<Excursions />
				<FormAndCareerGuidanceExcursions ref={feedbackFormRef} />
				<Advantages />
				<ChildrenAmount />
				<PaymentMethod />
				<Reviews />
				<div className={styles.navigateButtonsWrapper}>
					<Button
						className={styles.navigateButton}
						backgroundColor='blue-500'
						cornerIcon={!isIconHidden && <IconArrowTopRight fill='#BDD4E2' />}
						onClick={handleExcursionClick}
					>
						Выбрать экскурсию
					</Button>
					<Button
						className={styles.navigateButton}
						backgroundColor='blue-500'
						cornerIcon={!isIconHidden && <IconArrowTopRight fill='#BDD4E2' />}
						onClick={handleTravelClick}
					>
						Международные поездки
					</Button>
				</div>
				<div className={styles.iconPhoneWrapper}>
					<IconButton
						className={styles.iconButton}
						Icon={<IconPhone />}
						onClick={openWhatsApp}
					/>
				</div>
			</Page>
		</LoadingBoundary>
	);
};

export default HomePage;
