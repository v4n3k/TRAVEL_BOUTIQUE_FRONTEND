import { ReviewEntity } from '../../../../types';
import styles from './Review.module.css';

export const Review = ({ author, text }: ReviewEntity) => {
	return (
		<li className={styles.review}>
			<span className={styles.author}>{author}</span>
			<p className={styles.text}>{text}</p>
		</li>
	);
};
