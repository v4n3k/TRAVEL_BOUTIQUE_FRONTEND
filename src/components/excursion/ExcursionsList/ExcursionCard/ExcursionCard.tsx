import { useNavigate } from 'react-router-dom';
import { IconArrowTopRight } from '../../../../icons/IconArrowTopRight';
import { ExcursionCardProps, RouteBase } from '../../../../types';
import { IconButton } from '../../../ui';
import { ExcursionImage } from '../../ui/ExcursionImage/ExcursionImage';
import { Field } from '../../ui/Field/Field';
import styles from './ExcursionCard.module.css';

export const ExcursionCard = ({
	id,
	name,
	imgSrc,
	city,
	accompanistsAmount,
	personsAmount,
	price,
}: ExcursionCardProps) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`${RouteBase.EXCURSION}/${id}`);
	};

	return (
		<li className={styles.excursionCard} onClick={handleClick}>
			<div className={styles.imageWrapper}>
				<ExcursionImage className={styles.excursionImage} src={imgSrc} />
				<IconButton
					className={styles.iconButton}
					Icon={<IconArrowTopRight />}
				/>
			</div>

			<div className={styles.priceOverlay}>
				<span>{price} ₽</span>
			</div>

			<div className={styles.textInfo}>
				<h2 className={styles.title}>{name}</h2>
				<ul className={styles.fieldsList}>
					<Field className={styles.field} fieldKey='Город' fieldValue={city} />
					<Field
						className={styles.field}
						fieldKey='Количество сопровождающих'
						fieldValue={accompanistsAmount}
					/>
					<Field
						className={styles.field}
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
