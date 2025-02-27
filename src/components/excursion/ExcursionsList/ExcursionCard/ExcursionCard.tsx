import { ExcursionCardProps } from '../../../../types';
import { ExcursionImage } from '../../ui/ExcursionImage/ExcursionImage';
import { Field } from '../../ui/Field/Field';
import styles from './ExcursionCard.module.css';

export const ExcursionCard = ({
	title,
	imgSrc,
	city,
	accompanistsAmount,
	personsAmount,
	price,
}: ExcursionCardProps) => {
	return (
		<li className={styles.excursionCard}>
			<ExcursionImage src={imgSrc} />

			<div className={styles.textInfo}>
				<h2 className={styles.title}>{title}</h2>
				<ul className={styles.fieldsList}>
					<Field fieldKey='Город' fieldValue={city} />
					<Field
						fieldKey='Количество сопровождающих'
						fieldValue={accompanistsAmount}
					/>
					<Field
						fieldKey='Количество человек в группе'
						fieldValue={personsAmount}
					/>
				</ul>

				<div className={styles.price}>
					<span>{price} ₽</span>
				</div>
			</div>
		</li>
	);
};
