import { IconArrowTopRight } from '../../../../icons/IconArrowTopRight';
import { ExcursionCardProps } from '../../../../types';
import { IconButton } from '../../../ui';
import { ExcursionImage } from '../../ui/ExcursionImage/ExcursionImage';
import { Field } from '../../ui/Field/Field';
import styles from './ExcursionCard.module.css';

export const ExcursionCard = ({
	name,
	imgSrc,
	city,
	accompanistsAmount,
	personsAmount,
	price,
}: ExcursionCardProps) => {
	return (
		<li className={styles.excursionCard}>
			<div className={styles.imageWrapper}>
				<ExcursionImage className={styles.excursionImage} src={imgSrc} />
				<IconButton
					className={styles.iconButton}
					Icon={<IconArrowTopRight />}
				/>
				<div className={styles.priceOverlay}>
					<span>{price} ₽</span>
				</div>
			</div>

			<div className={styles.textInfo}>
				<h2 className={styles.title}>{name}</h2>
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
