import { TagsListProps } from '../../../types';
import { Tag } from './Tag/Tag';
import styles from './TagsList.module.css';

export const TagsList = ({ tags, size }: TagsListProps) => {
	return (
		<ul className={styles.tagsList}>
			{tags.map(tag => (
				<Tag key={tag.id} size={size} children={tag.name} />
			))}
		</ul>
	);
};
