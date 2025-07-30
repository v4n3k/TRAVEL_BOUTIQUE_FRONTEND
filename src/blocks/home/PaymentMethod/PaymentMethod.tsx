import { useNavigate } from 'react-router-dom';
import imgChildren from '../../../../assets/images/Rectangle 25.png';
import imgGrandParents from '../../../../assets/images/Rectangle 27.png';
import { IconButton } from '../../../components/ui/IconButton/IconButton';
import { ImageLink } from '../../../components/ui/ImageLink/ImageLink';
import { Section } from '../../../components/ui/Section/Section';
import { IconArrowTopRight } from '../../../icons/IconArrowTopRight';
import { RouteName } from '../../../types/routes';
import styles from './PaymentMethod.module.css';

const methods = [
	'Оплата банковской дебетовой или кредитной картой, система быстрых платежей QR-код',
	'Оплата наличными',
	'Безналичный способ оплаты. Данный способ подходит для Юридических лиц и Индивидуальных предпринимателей',
];

export const PaymentMethod = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(RouteName.ABOUT, { state: { scrollToPayment: true } });
	};

	return (
		<Section className={styles.paymentMethod}>
			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<h2 className={styles.title}>Выберите удобный способ оплаты:</h2>
					<IconButton
						className={styles.iconButton}
						Icon={<IconArrowTopRight />}
						onClick={handleClick}
					/>
				</div>
				<ul className={styles.methodsList}>
					{methods.map(method => (
						<li key={method}>{method}</li>
					))}
				</ul>
			</div>
			<div className={styles.imagesContainer}>
				<ImageLink className={styles.imgChildren} src={imgChildren} />
				<ImageLink className={styles.imgGrandParents} src={imgGrandParents} />
			</div>
		</Section>
	);
};
