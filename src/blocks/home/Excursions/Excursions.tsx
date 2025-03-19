import { useRef } from 'react';
import { ExcursionsList } from '../../../components/excursion';
import { Section } from '../../../components/ui';
import { ListSlider } from '../../../components/ui/ListSlider/ListSlider';
import styles from './Excursions.module.css';

export const Excursions = () => {
	const listRef = useRef<HTMLUListElement>(null);

	return (
		<Section>
			<ListSlider
				listRef={listRef}
				buttonClassName={styles.sliderButton}
				widthOnGradientHide={1070}
			>
				<ExcursionsList ref={listRef} />
			</ListSlider>
		</Section>
	);
};
