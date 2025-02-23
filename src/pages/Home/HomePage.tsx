import mainImage from '../../../assets/images/Frame 168@2x.png';
import purpleHouse from '../../../assets/images/Rectangle 28.png';
import kremlinImage from '../../../assets/images/Rectangle 5.png';
import { IconButton, Image, TagsList } from '../../components/ui';
import { IconArrowTopRight } from '../../icons/IconArrowTopRight';
import { TagEntity } from '../../types';
import styles from './HomePage.module.css';

const cities: TagEntity[] = [
	{ id: 1, name: 'Санкт-Петербург' },
	{ id: 2, name: 'Казань' },
	{ id: 3, name: 'Реж' },
	{ id: 4, name: 'Карелия' },
	{ id: 5, name: 'Сочи' },
	{ id: 6, name: 'Екатеринбург' },
	{ id: 7, name: 'Тюмень' },
];

export const HomePage = () => {
	return (
		<div className={styles.homePage}>
			<h1 className={styles.title}>
				Школьные<span>экскурсии</span>
			</h1>

			<section className={styles.schoolExcursions}>
				<div className={styles.imagesContainer}>
					<Image className={styles.mainImage} src={mainImage} />
					<Image
						className={styles.kremlinImageOnSmallScreen}
						src={kremlinImage}
					/>
				</div>

				<div className={styles.container}>
					<div className={styles.rowContainer}>
						<div className={styles.helpInChoosing}>
							<div className={styles.titleContainer}>
								<h2>Помощь в выборе тура</h2>

								<IconButton Icon={<IconArrowTopRight />} />
							</div>
							<p>
								Наши методисты составляют уникальные и индивидуальные маршруты,
								учитывая все предпочтения клиентов. С удовольствием
								проконсультируем вас детально!
							</p>
						</div>
						<Image className={styles.kremlinImage} src={kremlinImage} />
					</div>

					<div className={styles.rowContainer}>
						<div className={styles.cities}>
							<TagsList tags={cities} />
						</div>

						<Image className={styles.purpleHouseImage} src={purpleHouse} />
					</div>
				</div>
			</section>
		</div>
	);
};
