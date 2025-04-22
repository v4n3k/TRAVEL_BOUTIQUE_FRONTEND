import { useEffect, useRef, useState } from 'react';
import { Section } from '../../../components/ui';
import { useIntersectionObserver } from '../../../hooks/useObserver';
import styles from './ChildrenAmount.module.css';

export const ChildrenAmount = () => {
	const [displayNumber, setDisplayNumber] = useState(0);
	const amountRef = useRef<HTMLSpanElement>(null);
	const isCounting = useRef(false);

	const TARGET_NUMBER = 10568;
	const duration = 1500;

	const [isIntersecting] = useIntersectionObserver(amountRef, {
		threshold: 0.5,
	});

	useEffect(() => {
		if (isIntersecting && !isCounting.current) {
			isCounting.current = true;
			animateNumber();
		}
	}, [isIntersecting]);

	const animateNumber = () => {
		let startTimestamp: number | null = null;
		const startNumber = 0;

		const step = (timestamp: number) => {
			if (!startTimestamp) startTimestamp = timestamp;

			const elapsed = timestamp - startTimestamp;

			let progress = Math.min(elapsed / duration, 1);

			progress = 1 - Math.pow(1 - progress, 3);

			const currentValue = Math.floor(
				progress * (TARGET_NUMBER - startNumber) + startNumber
			);

			setDisplayNumber(currentValue);

			if (elapsed < duration) {
				requestAnimationFrame(step);
			} else {
				setDisplayNumber(TARGET_NUMBER);
			}
		};

		requestAnimationFrame(step);
	};

	const characters = displayNumber.toString().split('');

	return (
		<Section className={styles.childrenAmount}>
			<p className={styles.description}>
				количество детей, которые
				<br />
				<span> посетили наши экскурсии</span>
			</p>

			<div className={styles.amountContainer}>
				<span className={styles.amount} ref={amountRef}>
					{characters.map((char, index) => (
						<span key={index}>{char}</span>
					))}
				</span>
			</div>
		</Section>
	);
};
