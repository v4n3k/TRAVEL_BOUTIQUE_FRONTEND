import { ReactNode } from 'react';
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
}

export const Categories = ({
	renderTitle,
	categories,
	expandable = false,
	withName = true,
	withIcon = true,
}: CategoriesProps) => {
	return (
		<Section>
			<Title className={styles.title}>{renderTitle()}</Title>

			{expandable ? (
				<Expandable collapsedHeight={1056}>
					<CategoriesList
						categories={categories}
						withName={withName}
						withIcon={withIcon}
					/>
				</Expandable>
			) : (
				<CategoriesList
					categories={categories}
					withName={withName}
					withIcon={withIcon}
				/>
			)}
		</Section>
	);
};
