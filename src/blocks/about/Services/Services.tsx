import { Section } from '../../../components/ui/Section/Section';
import { Title } from '../../../components/ui/Title/Title';
import { Service } from './Service/Service';
import styles from './Services.module.css';

const services = [
	{ id: 1, name: 'Автобус для школьной экскурсии' },
	{ id: 2, name: 'Лицензированный экскурсовод на группу' },
	{ id: 3, name: 'Индивидульный Гид' },
	{ id: 4, name: 'Индивидуальный тур/маршрут' },
	{ id: 5, name: 'Квест / мероприятие на группу от 12 человек' },
];

export const Services = () => {
	return (
		<Section>
			<Title>Услуги</Title>
			<ul className={styles.list}>
				{services.map(service => (
					<Service key={service.id} {...service} />
				))}
			</ul>
		</Section>
	);
};
