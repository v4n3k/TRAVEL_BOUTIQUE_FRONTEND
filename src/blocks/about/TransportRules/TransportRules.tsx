import img from '../../../../assets/images/WhatsApp Image 2024-11-21 at 22.58.05 (1) 3.png';
import { Box, Image, Section, Title } from '../../../components/ui';
import { IconAvia } from '../../../icons/IconAvia';
import { IconCar } from '../../../icons/IconCar';
import { IconRZD } from '../../../icons/IconRZD';
import { Documents } from './Documents/Documents';
import { PaymentDetails } from './PaymentDetails/PaymentDetails';
import styles from './TransportRules.module.css';
import { TransportVariant } from './TransportVariant/TransportVariant';
import { WrappedText } from './WrappedText/WrappedText';

export const TransportRules = () => {
	return (
		<Section>
			<Title>
				Правила перевозки групп
				<span className={styles.titleAccent}> детей</span>
			</Title>
			<Box className={styles.transportVariants}>
				<TransportVariant
					title='авиа'
					Icon={<IconAvia />}
					renderDescription={() => (
						<>
							Для перевозки организованной группы детей , требуется официальное
							оформление. Если дети до 12 лет, возможен детский тариф,
							дополнительно информацию уточняем у авиаперевозчик при
							бронировании билетов. Сопровождающих должно быть, минимум 1
							взрослый на группу 12 человек. В случае , если сопровождающих
							недостаточно, можно запросить дополнительного сотрудника для
							группы у авиакомпании.
						</>
					)}
				/>
				<TransportVariant
					title='ржд'
					Icon={<IconRZD />}
					renderDescription={() => (
						<>
							<p>
								Необходимо иметь при себе оригинал или нотариально заверенную
								копию Свидетельства о рождении или паспорт. Данный документ
								потребуется для посадки в поезд.
							</p>
							<br />
							<p>
								Требования к организованной перевозке детей железнодорожным
								транспортом отличаются от любого другого вида транспорта, а
								также имеют свою специфику в оформлении. Минимальное количество
								детей для организованной группы во внутригосударственном
								сообщении и в сообщении со странами СНГ, Балтии и Абхазии не
								менее 10 человек, оплативших проезд; А так же если группа до 30
								человек, то при сопровождении взрослых , это может быть не
								организованная перевозка детей. ( Есть нюансы по оплатам).
								ПИТАНИЕ ОРГАНИЗОВАННЫХ ДЕТСКИХ ГРУПП (ОГД) осуществляется в
								следующие интервалы времени (местное время): завтрак – с 08:00
								до 10:00; обед – с 12:00 до 15:00; полдник – с 16:00 до 17:00;
								ужин – 18:00 до 21:00.
							</p>
						</>
					)}
				/>
			</Box>

			<Documents />
			<PaymentDetails />

			<Box>
				<TransportVariant
					title='авто'
					Icon={<IconCar />}
					renderDescription={() => (
						<>
							<p>
								Согласно ФЗ о туристической деятельности, только ТУРОПЕРАТОР
								вправе формировать туристический продукт (комплекс услуг по
								перевозке, размещению, экскурсионному обслуживанию, покупке
								входных билетов). Получается, организовывая поездку для детей
								физ. лицо заказывает: автобус и как минимум покупает входные
								билеты, продавая это другим заинтересованным лицам за единую
								цену, что относится к формированию туристического продукта.
								Таким образом физ. лица, а также турагенствам, запрещено
								формировать туристический продукт и тем более его продавать с
								целью заработка. Добиваясь безопасности для своих детей во время
								школьных поездок, советуем доверять профессионалам своего дела.
							</p>
							<br />
							<p>
								Организованной перевозкой группы детей считается -
								организованная перевозка восьми и более детей в автобусе, не
								относящемся к маршрутному транспортному средству, без родителей
								и законных представителей. Организованная перевозка группы детей
								должна осуществляться в соответствии с Правилами дорожного
								движения, а также Правилами организованной перевозки групп детей
								автобусами (утверждены постановлением Правительства Российской
								Федерации от 15.12.2013 № 1177), в автобусе, обозначенном
								опознавательными знаками "Перевозка детей" (согласно ПДД).
							</p>
							<br />
							<p>
								Медицинский сотрудник на время автоперевозки не требуется! Если
								речь идет об организованной транспортной колонне (от 2х
								автобусов), то тут мед. сотрудник необходим,только в случае
								движения более 12 часов, согласно графику движения. Если хотя бы
								одному участнику группы менее 7 лет, то автобус не может
								находиться в дороге более четырёх часов, согласно графику
								движения.
							</p>
						</>
					)}
				/>
			</Box>

			<Box className={styles.wrappedTextContainer}>
				<WrappedText className={styles.wrappedText} italic>
					Все сопроводительные документы по экскурсии оформляют наши менеджеры,
					заверяют и отправляют по всем ведомствам.
				</WrappedText>
				<Image className={styles.image} src={img} />
			</Box>
		</Section>
	);
};
