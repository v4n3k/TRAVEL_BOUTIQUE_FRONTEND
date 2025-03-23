import { useRef } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { ReviewsListProps } from '../../../types';
import { Expandable, ListSlider } from '../../ui';
import { Review } from './Review/Review';
import styles from './ReviewsList.module.css';

export const ReviewsList = ({ reviews }: ReviewsListProps) => {
	const { width } = useWindowSize();
	const listRef = useRef<HTMLUListElement>(null);

	const isSlider = width && width > 440;
	const isSmallSlider = width && width <= 510;
	const isMediumSlider = width && width <= 800;

	return (
		<>
			{isSlider ? (
				<ListSlider
					className={styles.listSlider}
					listRef={listRef}
					buttonOffset={isSmallSlider ? 52 : isMediumSlider ? 86 : 32}
					gradientWidth={300}
				>
					<ul className={styles.reviewsList} ref={listRef}>
						{reviews.map(review => (
							<Review key={review.id} {...review} />
						))}
					</ul>
				</ListSlider>
			) : (
				<Expandable>
					<ul className={styles.reviewsList}>
						{reviews.map(review => (
							<Review key={review.id} {...review} />
						))}
					</ul>
				</Expandable>
			)}
		</>
	);
};
