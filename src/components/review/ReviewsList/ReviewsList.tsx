import { useEffect, useRef, useState } from 'react';
import { ReviewsListProps } from '../../../types';
import { Expandable, ListSlider } from '../../ui';
import { Review } from './Review/Review';
import styles from './ReviewsList.module.css';

export const ReviewsList = ({ reviews }: ReviewsListProps) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const listRef = useRef<HTMLUListElement>(null);

	const isSlider = windowWidth > 440;
	const isSmallSlider = windowWidth <= 510;
	const isMediumSlider = windowWidth <= 800;

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

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
