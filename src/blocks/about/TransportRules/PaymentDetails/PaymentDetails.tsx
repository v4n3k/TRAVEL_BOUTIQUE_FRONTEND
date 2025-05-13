import { Box } from '../../../../components/ui/Box/Box';
import { TextItem } from '../TextItem/TextItem';
import { WrappedText } from '../WrappedText/WrappedText';
import styles from './PaymentDetails.module.css';

export const PaymentDetails = () => {
	return (
		<Box>
			<div className={styles.textContainer}>
				<WrappedText className={styles.wrappedText}>
					Заявки для перевозки ОГП, ОГД принимаются от 90-60-45 суток до 10
					суток до отправления поезда. Заявки, предъявленные менее чем за 10
					суток до отправления поезда, принимаются при возможности их
					выполнения.
				</WrappedText>
				<WrappedText
					className={styles.wrappedTextOnDesktop}
					textColor='red-300'
					italic
				>
					Для оформления перевозки организованных групп пассажиров на поездах
					«Сапсан» действуют иные правила.
				</WrappedText>
			</div>
			<h4 className={styles.title}>Размер сбора с 1 декабря 2023 года:</h4>
			<ul className={styles.list}>
				<TextItem className={styles.textItem}>
					для перевозки ОГД – 120,20 руб. за каждое место (ставка установлена
					ФАС России).
				</TextItem>
				<TextItem className={styles.textItem}>
					для перевозки ОГП – 481,20 руб. за каждое место (ставка установлена
					ФАС России).
				</TextItem>
			</ul>
			<WrappedText
				className={styles.wrappedTextOnMobile}
				textColor='red-300'
				italic
			>
				Для оформления перевозки организованных групп пассажиров на поездах
				«Сапсан» действуют иные правила.
			</WrappedText>
		</Box>
	);
};
