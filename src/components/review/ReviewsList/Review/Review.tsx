import { ReviewEntity } from '../../../../types';
import styles from './Review.module.css';

export const Review = ({
	author,
	text,
	marginBottom = 0,
	marginTop = 0,
	ref,
}: ReviewEntity) => {
	return (
		<li className={styles.review} style={{ marginBottom, marginTop }} ref={ref}>
			<span className={styles.author}>{author}</span>
			<p className={styles.text}>{text}</p>
		</li>
	);
};
