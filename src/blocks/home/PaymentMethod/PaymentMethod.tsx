import imgChildren from '../../../../assets/images/Rectangle 25.png';
import imgGrandParents from '../../../../assets/images/Rectangle 27.png';
import { IconButton, Image, Section } from '../../../components/ui';
import { IconArrowTopRight } from '../../../icons/IconArrowTopRight';
import styles from './PaymentMethod.module.css';

const methods = [
	'Оплата банковской дебетовой или кредитной картой, система быстрых платежей QR-код',
	'Оплата наличными',
	'Безналичный способ оплаты. Данный способ подходит для Юридических лиц и Индивидуальных предпринимателей',
];

export const PaymentMethod = () => {
	return (
		<Section className={styles.paymentMethod}>
			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<h2 className={styles.title}>Выберите удобный способ оплаты:</h2>
					<IconButton
						className={styles.iconButton}
						Icon={<IconArrowTopRight />}
					/>
				</div>
				<ul className={styles.methodsList}>
					{methods.map(method => (
						<li key={method}>{method}</li>
					))}
				</ul>
			</div>
			<div className={styles.imagesContainer}>
				<Image className={styles.imgChildren} src={imgChildren} />
				<Image className={styles.imgGrandParents} src={imgGrandParents} />
			</div>
		</Section>
	);
};
