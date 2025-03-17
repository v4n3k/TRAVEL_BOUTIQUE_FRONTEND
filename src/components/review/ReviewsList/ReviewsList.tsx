import { useEffect, useRef, useState } from 'react';
import { Review } from '../../../blocks/home/Reviews/Review/Review';
import { ReviewEntity } from '../../../types';
import { ListSlider } from '../../ui';
import { Expandable } from '../../ui/Expandable/Expandable';
import styles from './ReviewsList.module.css';

export interface ReviewsListProps {
	reviews: ReviewEntity[];
}

export const ReviewsList = ({ reviews }: ReviewsListProps) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 440);
	const listRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 440);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			{!isMobile ? (
				<ListSlider listRef={listRef}>
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
