import { ManagerButton } from '../../../../components/excursion';
import { Section, Title } from '../../../../components/ui';
import { cn } from '../../../../utils/cn';
import styles from './PaymentMethod.module.css';

export const PaymentMethod = () => {
	return (
		<Section className={styles.paymentMethod}>
			<Title>Выберите удобный способ оплаты:</Title>
			<ul className={styles.list}>
				<li className={cn(styles.item, styles.first)}>
					Оплата банковской дебетовой или кредитной картой, система быстрых
					платежей QR-код
				</li>
				<li className={cn(styles.item, styles.second)}>Оплата наличными</li>
				<li className={cn(styles.item, styles.third)}>
					Безналичный способ оплаты. Данный способ подходит для Юридических лиц
					и Индивидуальных предпринимателей
				</li>
			</ul>

			<div className={styles.buttonContainer}>
				<ManagerButton />
			</div>
		</Section>
	);
};
