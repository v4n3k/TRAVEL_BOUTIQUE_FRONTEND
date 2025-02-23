import { TagsListProps } from '../../../types';
import { Tag } from './Tag/Tag';
import styles from './TagsList.module.css';

export const TagsList = ({ tags }: TagsListProps) => {
	return (
		<ul className={styles.tagsList}>
			{tags.map(tag => (
				<Tag key={tag.id} children={tag.name} />
			))}
		</ul>
	);
};
