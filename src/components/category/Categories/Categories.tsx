import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { CategoriesProps } from '../../../types/props';
import { Expandable } from '../../ui/Expandable/Expandable';
import { Section } from '../../ui/Section/Section';
import { Title } from '../../ui/Title/Title';
import styles from './Categories.module.css';
import { CategoriesList } from './CategoriesList/CategoriesList';

export const Categories = ({
	renderTitle,
	categories,
	expandable = false,
	withName,
	withIcon,
	textUnderImage = false,
	canAutoScroll = false,
}: CategoriesProps) => {
	const ref = useRef<HTMLElement>(null);
	const location = useLocation();

	useEffect(() => {
		if (
			location.state?.scrollToCareerGuidance &&
			ref.current &&
			canAutoScroll
		) {
			setTimeout(() => {
				ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}, 50);
		}
	}, [location.state?.scrollToCareerGuidance, ref.current, canAutoScroll]);

	return (
		<Section ref={ref}>
			<Title className={styles.title}>{renderTitle()}</Title>

			{expandable ? (
				<Expandable collapsedHeight={1056}>
					<CategoriesList
						categories={categories}
						withName={withName}
						withIcon={withIcon}
						textUnderImage={textUnderImage}
					/>
				</Expandable>
			) : (
				<CategoriesList
					categories={categories}
					withName={withName}
					withIcon={withIcon}
					textUnderImage={textUnderImage}
				/>
			)}
		</Section>
	);
};
