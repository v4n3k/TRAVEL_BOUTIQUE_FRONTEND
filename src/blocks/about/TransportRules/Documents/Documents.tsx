import img from '../../../../../assets/images/WhatsApp Image 2024-11-21 at 22.58.05 (1) 4.png';
import { Box } from '../../../../components/ui/Box/Box';
import { Image } from '../../../../components/ui/Image/Image';
import { TextItem } from '../TextItem/TextItem';
import styles from './Documents.module.css';

export const Documents = () => {
	return (
		<Box>
			<h3 className={styles.title}>
				ДОКУМЕНТЫ, НЕОБХОДИМЫЕ ПРИ РЕЗЕРВИРОВАНИИ МЕСТ ДЛЯ ОРГАНИЗОВАННЫХ ГРУПП
				ПАССАЖИРОВ:
			</h3>
			<ul className={styles.list}>
				<TextItem className={styles.item}>
					Письмо-заявка установленного образца. Принимается от юридических лиц,
					государственных учреждений. В заявке указываются: наименование
					организации, количество мест, номер поезда, тип или класс вагона, дата
					выезда, станция отправления и станция назначения.
				</TextItem>
				<TextItem className={styles.item}>
					Пофамильный список организованной группы пассажиров с указанием
					персональных данных и реквизитов документов, удостоверяющих их
					личности.
				</TextItem>
				<TextItem className={styles.item}>
					При подаче заявки на перевозку ОГД к заявке прилагается список, в
					котором отдельно указываются руководитель группы и взрослые
					сопровождающие ее лица из расчета не более одного взрослого
					сопровождающего лица на 12 детей и (или) школьников.
				</TextItem>
			</ul>
			<Image className={styles.image} src={img} />
		</Box>
	);
};
