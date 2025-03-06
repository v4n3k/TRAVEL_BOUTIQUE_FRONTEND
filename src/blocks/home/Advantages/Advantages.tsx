import { Section } from '../../../components/ui';
import { IconBrain } from '../../../icons/IconBrain';
import { IconClient } from '../../../icons/IconClient';
import { IconComfort } from '../../../icons/IconComfort';
import { IconContract } from '../../../icons/IconContract';
import { IconFingerPrint } from '../../../icons/IconFingerPrint';
import { IconLike } from '../../../icons/IconLike';
import { AdvantageEntity } from '../../../types';
import { Advantage } from './Advantage/Advantage';
import styles from './Advantages.module.css';

const advantages: AdvantageEntity[] = [
	{
		id: 1,
		text: 'Программу разрабатывают опытные методисты.',
		Icon: <IconBrain />,
	},
	{
		id: 2,
		text: 'Педагогов обеспечиваем лучшими условиями',
		Icon: <IconLike />,
	},
	{
		id: 3,
		text: 'Официальное оформление тура, заключение договора',
		Icon: <IconContract />,
	},
	{
		id: 4,
		text: 'Только аккредитованные экскурсоводы и гиды',
		Icon: <IconFingerPrint />,
	},
	{
		id: 5,
		text: 'Комфортабельные автобусы туристического класса',
		Icon: <IconComfort />,
	},
	{
		id: 6,
		text: 'Индивидуальный подход к каждому клиенту',
		Icon: <IconClient />,
	},
];

export const Advantages = () => {
	return (
		<Section className={styles.advantages}>
			<div className={styles.titleContainer}>
				<p>
					Даём возможность родителям присоединиться на экскурсию
					<span> по цене школьника.</span>
				</p>
				<h2>Преимущества</h2>
			</div>
			<ul className={styles.advantagesList}>
				{advantages?.map(advantage => (
					<Advantage key={advantage.id} {...advantage} />
				))}
			</ul>
		</Section>
	);
};
