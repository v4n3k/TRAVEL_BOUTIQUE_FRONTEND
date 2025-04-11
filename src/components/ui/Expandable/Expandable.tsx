import { useEffect, useRef, useState } from 'react';
import { IconArrow } from '../../../icons/IconArrow';
import { ExpandableProps } from '../../../types';
import { cn } from '../../../utils/cn';
import { Button } from '../Button/Button';
import styles from './Expandable.module.css';

export const Expandable = ({
	children,
	collapsedHeight = 417,
}: ExpandableProps) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		const contentElement = contentRef.current;

		if (!contentElement) return;

		if (isExpanded) {
			contentElement.style.maxHeight = `${contentElement.scrollHeight}px`;
		} else {
			contentElement.style.maxHeight = `${collapsedHeight}px`;
		}
	}, [isExpanded, collapsedHeight, window.innerWidth]);

	useEffect(() => {
		if (isExpanded) {
			if (!contentRef.current || !buttonRef.current) return;

			setTimeout(() => {
				if (!contentRef.current || !buttonRef.current) return;
				contentRef.current.style.overflow = 'visible';
			}, 500);
		} else {
			if (!contentRef.current || !buttonRef.current) return;

			contentRef.current.style.overflow = 'hidden';
		}
	}, [isExpanded]);

	const toggleExpand = () => {
		setIsExpanded(prev => !prev);
	};

	return (
		<div
			className={cn(styles.expandable, !isExpanded ? styles.collapsed : '')}
			ref={contentRef}
		>
			{children}
			<Button
				className={styles.iconButton}
				rootClassName={cn(
					styles.iconButtonRoot,
					isExpanded ? styles.expanded : ''
				)}
				ref={buttonRef}
				backgroundColor='white-100'
				onClick={toggleExpand}
			>
				<IconArrow direction={isExpanded ? 'top' : 'bottom'} />
			</Button>
		</div>
	);
};
