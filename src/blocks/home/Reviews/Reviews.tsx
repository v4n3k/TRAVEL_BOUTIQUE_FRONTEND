import { ReviewsList } from '../../../components/review';
import { Section, Title } from '../../../components/ui';
import styles from './Reviews.module.css';

export const Reviews = () => {
	return (
		<Section className={styles.reviews}>
			<Title className={styles.title}>Отзывы</Title>
			<ReviewsList />
		</Section>
	);
};
