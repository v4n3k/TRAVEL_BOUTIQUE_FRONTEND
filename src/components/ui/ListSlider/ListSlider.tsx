import { IconArrowRight } from '../../../icons/IconArrowRight';
import { ListSliderProps } from '../../../types';
import { Button } from '../Button/Button';
import styles from './ListSlider.module.css';

export const ListSlider = ({
	children,
	buttonOffset = 100,
	listRef,
}: ListSliderProps) => {
	const wrapperStyle = {
		'--button-offset': `${buttonOffset}px`,
	} as React.CSSProperties;

	const handleClick = () => {
		if (listRef?.current) {
			const currentScrollLeft = listRef.current.scrollLeft;
			const cards = Array.from(listRef.current.children);

			if (cards.length === 0) {
				console.warn('No excursion cards found in the list.');
				return;
			}

			let cardWidthToScroll = 0;
			let foundCard = false;

			let accumulatedWidth = 0;
			for (let i = 0; i < cards.length; i++) {
				const card = cards[i];
				const cardWidth = card.scrollWidth;

				if (
					currentScrollLeft >= accumulatedWidth &&
					currentScrollLeft < accumulatedWidth + cardWidth
				) {
					cardWidthToScroll = cardWidth;
					foundCard = true;
					break;
				}
				accumulatedWidth += cardWidth;
			}

			if (!foundCard) {
				cardWidthToScroll = cards[0].scrollWidth;
			}

			const computedStyle = window.getComputedStyle(listRef.current);
			const listGap = parseInt(computedStyle.gap);

			listRef.current.scrollTo({
				left: currentScrollLeft + cardWidthToScroll + listGap,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div className={styles.maskedListWrapper} style={wrapperStyle}>
			{children}
			<Button
				className={styles.iconButton}
				rootClassName={styles.iconButtonRoot}
				backgroundColor='white-100'
				onClick={handleClick}
			>
				<IconArrowRight />
			</Button>
		</div>
	);
};
