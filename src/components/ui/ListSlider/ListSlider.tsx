import { useEffect, useState } from 'react';
import { IconArrowRight } from '../../../icons/IconArrowRight';
import { ListSliderProps } from '../../../types';
import { cn } from '../../../utils/cn';
import { Button } from '../Button/Button';
import styles from './ListSlider.module.css';

export const ListSlider = ({
	children,
	className,
	buttonOffset = 100,
	listRef,
	buttonClassName,
	widthOnGradientHide = 0,
	gradientWidth = buttonOffset * 2,
}: ListSliderProps) => {
	const [isGradientHidden, setIsGradientHidden] = useState(
		window.innerWidth <= widthOnGradientHide
	);

	const wrapperStyle = {
		'--button-offset': `${buttonOffset}px`,
		'--gradient-width': `${gradientWidth}px`,
	} as React.CSSProperties;

	const handleClick = () => {
		if (listRef?.current) {
			const currentScrollLeft = listRef.current.scrollLeft;
			const cards = Array.from(listRef.current.children);

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

			const computedStyle = window.getComputedStyle(listRef.current);
			const listGap = parseInt(computedStyle.columnGap);

			listRef.current.scrollTo({
				left: currentScrollLeft + cardWidthToScroll + listGap,
				behavior: 'smooth',
			});
		}
	};

	useEffect(() => {
		if (widthOnGradientHide <= 0) return;

		const mediaQuery = window.matchMedia(
			`(max-width: ${widthOnGradientHide}px)`
		);

		const handleMediaQueryChange = (event: MediaQueryListEvent) => {
			setIsGradientHidden(event.matches);
		};

		mediaQuery.addEventListener('change', handleMediaQueryChange);

		setIsGradientHidden(mediaQuery.matches);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		};
	}, [widthOnGradientHide]);

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
