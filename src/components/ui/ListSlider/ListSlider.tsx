import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { IconArrowRight } from '../../../icons/IconArrowRight';
import { ListSliderProps } from '../../../types';
import { cn } from '../../../utils/cn';
import { Button } from '../Button/Button';
import styles from './ListSlider.module.css';

export const ListSlider = <T extends unknown>({
	children,
	className,
	buttonOffset = 100,
	listRef,
	buttonClassName,
	widthOnGradientHide = 0,
	gradientWidth = buttonOffset * 2,
	items,
	setItems,
}: ListSliderProps<T>) => {
	const isGradientHidden = useMediaQuery(
		`(max-width: ${widthOnGradientHide}px)`
	);

	const wrapperStyle = {
		'--button-offset': `${buttonOffset}px`,
		'--gradient-width': `${gradientWidth}px`,
	} as React.CSSProperties;

	const handleClick = () => {
		if (listRef?.current) {
			const list = listRef.current;
			const currentScrollLeft = list.scrollLeft;
			const cards = Array.from(list.children);

			if (!cards.length) {
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

			const computedStyle = window.getComputedStyle(list);
			const listGap = parseInt(computedStyle.columnGap);
			const nextScrollLeft = currentScrollLeft + cardWidthToScroll + listGap;
			const scrollWidth = list.scrollWidth;
			const clientWidth = list.clientWidth;

			const oneCardAndGap = cardWidthToScroll + listGap;

			if (nextScrollLeft >= scrollWidth - clientWidth - oneCardAndGap) {
				items && setItems && setItems(prev => [...prev, ...items]);
			}

			list.scrollTo({
				left: nextScrollLeft,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div
			className={cn(
				styles.listSlider,
				className,
				isGradientHidden ? styles.gradientHidden : ''
			)}
			style={wrapperStyle}
		>
			{children}
			<Button
				className={styles.iconButton}
				rootClassName={cn(styles.iconButtonRoot, buttonClassName)}
				backgroundColor='white-100'
				onClick={handleClick}
			>
				<IconArrowRight />
			</Button>
		</div>
	);
};
