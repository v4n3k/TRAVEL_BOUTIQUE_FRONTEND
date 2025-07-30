import img from '../../../../assets/images/WhatsApp Image 2024-11-21 at 22.58.05 (1) 2.png';
import { Image } from '../../../components/ui/Image/Image';
import { Section } from '../../../components/ui/Section/Section';
import { TextContainer } from '../../../components/ui/TextContainer/TextContainer';
import { Title } from '../../../components/ui/Title/Title';
import styles from './QualityGuarantees.module.css';

export const QualityGuarantees = () => {
	return (
		<Section className={styles.qualityGuarantees}>
			<Title>Гарантии качества</Title>
			<TextContainer>
				<p className={styles.text}>
					ООО «Бутик Путешествий» - лицензированный туроператор России. Наша
					запись в Едином Федеральном реестре туроператоров ( РТО
					В031-00161-77/02341956 ). Финансовую гарантию нашей компании
					предоставляет АО СК «Пари» На сегодняшний день можно найти много
					туристических агенств оказывающих услуги по продаже и формированию
					туров для школьников самостоятельно. К сожалению эти действия
					незаконны. Сотрудничаем Мы, только с проверенными поставщиками и
					партнёрами.
				</p>
			</TextContainer>
			<Image className={styles.image} src={img} />
		</Section>
	);
};
