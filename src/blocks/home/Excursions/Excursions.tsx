import { useRef } from 'react';
import { ExcursionsList } from '../../../components/excursion';
import { Section } from '../../../components/ui';
import { ListSlider } from '../../../components/ui/ListSlider/ListSlider';

export const Excursions = () => {
	const listRef = useRef<HTMLUListElement>(null);

	const onClick = () => {
		if (listRef.current) {
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
		<Section>
			<ListSlider onClick={onClick}>
				<ExcursionsList ref={listRef} />
			</ListSlider>
		</Section>
	);
};
