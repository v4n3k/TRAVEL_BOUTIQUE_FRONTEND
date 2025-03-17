import { useRef } from 'react';
import { ExcursionsList } from '../../../components/excursion';
import { Section } from '../../../components/ui';
import { ListSlider } from '../../../components/ui/ListSlider/ListSlider';

export const Excursions = () => {
	const listRef = useRef<HTMLUListElement>(null);

	return (
		<Section>
			<ListSlider listRef={listRef}>
				<ExcursionsList ref={listRef} />
			</ListSlider>
		</Section>
	);
};
