import { useLayoutEffect, useRef, useState } from 'react';
import { TagsListProps } from '../../../types';
import { Tag } from './Tag/Tag';
import styles from './TagsList.module.css';

export const TagsList = ({
	tags,
	rowsAmount = 8,
	onTagClick,
	size,
}: TagsListProps) => {
	const tagsListRef = useRef<HTMLUListElement>(null);
	const [tagHeight, setTagHeight] = useState<number>(0);
	const rowGapRef = useRef<number>(0);

	useLayoutEffect(() => {
		if (!tagsListRef.current) {
			console.log('No tagsListRef.current');
			return;
		}

		const computedStyle = window.getComputedStyle(tagsListRef.current);
		const rowGapValue = computedStyle.rowGap;
		rowGapRef.current = parseInt(rowGapValue, 10) || 0;

		const firstTag = tagsListRef.current.firstChild as HTMLElement;
		if (firstTag) {
			setTagHeight(firstTag.offsetHeight);
		} else {
			console.log('No firstTag');
			setTagHeight(0);
		}
	}, [tags, size, rowsAmount]);

	const maxHeight =
		rowsAmount * tagHeight + rowGapRef.current * (rowsAmount - 1);

	return (
		<ul
			className={styles.tagsList}
			style={{
				maxHeight: tagHeight > 0 ? `${maxHeight}px` : 'none',
				overflow: 'hidden',
				cursor: onTagClick ? 'pointer' : 'default',
			}}
			ref={tagsListRef}
		>
			{tags.map(tag => (
				<Tag
					key={tag.id}
					size={size}
					children={tag.name}
					onClick={() => onTagClick(tag.name)}
				/>
			))}
		</ul>
	);
};
