import { ReviewsList } from '../../../components/review/ReviewsList/ReviewsList';
import { Section } from '../../../components/ui/Section/Section';
import { Title } from '../../../components/ui/Title/Title';
import styles from './Reviews.module.css';

export const Reviews = () => {
	return (
		<Section className={styles.reviews}>
			<Title className={styles.title}>Отзывы</Title>
			<ReviewsList />
		</Section>
	);
};
