import { ReactNode, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { CategoryEntity } from '../../../types';
import { Expandable, Section, Title } from '../../ui';
import styles from './Categories.module.css';
import { CategoriesList } from './CategoriesList/CategoriesList';

export interface CategoriesProps {
	renderTitle: () => ReactNode;
	categories: CategoryEntity[];
	expandable?: boolean;
	withName?: boolean;
	withIcon?: boolean;
	textUnderImage?: boolean;
	canAutoScroll?: boolean;
}

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
			ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	}, [location.state?.scrollToCareerGuidance, ref.current]);

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
