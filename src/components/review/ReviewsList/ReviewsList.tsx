import { useEffect, useRef, useState } from 'react';
import { ReviewsListProps } from '../../../types';
import { Expandable, ListSlider } from '../../ui';
import { Review } from './Review/Review';
import styles from './ReviewsList.module.css';

export const ReviewsList = ({ reviews }: ReviewsListProps) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const listRef = useRef<HTMLUListElement>(null);

	const isMobile = windowWidth <= 440;
	const isX = windowWidth <= 510;
	const isTablet = windowWidth <= 800;

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			{!isMobile ? (
				<ListSlider
					className={styles.listSlider}
					listRef={listRef}
					buttonOffset={isX ? 52 : isTablet ? 86 : 32}
					widthOnGradientHide={0}
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
