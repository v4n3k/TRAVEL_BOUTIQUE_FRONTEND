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
	const [isExpanded, setIsExpanded] = useState(false);
	const [isExpanding, setIsExpanding] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

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

			setIsExpanding(true);
			setTimeout(() => {
				if (!contentRef.current || !buttonRef.current) return;
				contentRef.current.style.overflow = 'visible';
				setIsExpanding(false);
			}, 500);
		} else {
			if (!contentRef.current || !buttonRef.current) return;

			contentRef.current.style.overflow = 'hidden';
		}
	}, [isExpanded]);

	const toggleExpand = () => {
		setIsExpanded(prev => !prev);
		if (isExpanded) {
			contentRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
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
					isExpanded ? styles.expanded : '',
					isExpanding ? styles.expanding : ''
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
