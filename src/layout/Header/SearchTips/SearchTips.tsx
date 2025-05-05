import { useEffect, useState } from 'react';
import { useSearchStore } from '../../../stores/useSearchStore';
import { SearchTipsProps } from '../../../types';
import styles from './SearchTips.module.css';

export const SearchTips = ({
	tips,
	areOpen,
	mountingDelay = 0,
	onTipClick,
}: SearchTipsProps) => {
	const setSearchQuery = useSearchStore(state => state.setSearchQuery);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		if (areOpen) {
			const timeoutId = setTimeout(() => {
				setIsMounted(true);
			}, mountingDelay);

			return () => clearTimeout(timeoutId);
		} else {
			setIsMounted(false);
		}
	}, [areOpen, mountingDelay]);

	return (
		<>
			{areOpen && isMounted && (
				<ul className={styles.searchTips}>
					{tips?.length ? (
						tips.slice(0, 8).map(tip => (
							<li
								key={tip.id}
								className={styles.tip}
								onClick={() => {
									setSearchQuery(tip.name);
									onTipClick();
								}}
							>
								{tip.name}
							</li>
						))
					) : (
						<li className={styles.noMatches}>Нет совпадений</li>
					)}
				</ul>
			)}
		</>
	);
};
