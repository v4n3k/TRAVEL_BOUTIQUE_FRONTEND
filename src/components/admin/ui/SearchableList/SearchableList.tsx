import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconArrowShort } from '../../../../icons/IconArrowShort';
import { IconSearch } from '../../../../icons/IconSearch';
import { SearchableListProps } from '../../../../types';
import { cn } from '../../../../utils/cn';
import { Button, Section } from '../../../ui';
import styles from './SearchableList.module.css';

export const SearchableList = ({
	title,
	buttonText,
	children,
	withBackButton = false,
	searchQuery,
	setSearchQuery,
	onAdd,
}: SearchableListProps) => {
	const navigate = useNavigate();
	const headerContainerRef = useRef<HTMLDivElement>(null);
	const searchRef = useRef<HTMLDivElement>(null);
	const [isWrapped, setIsWrapped] = useState(false);

	const handleGoBack = () => {
		navigate(-1);
	};

	const handleSearchQueryChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setSearchQuery(event.target.value);
	};

	const checkSearchWrap = () => {
		if (!headerContainerRef.current || !searchRef.current) {
			return;
		}

		if (searchRef.current.offsetTop > headerContainerRef.current.offsetTop) {
			setIsWrapped(true);
		} else {
			setIsWrapped(false);
		}
	};

	useEffect(() => {
		checkSearchWrap();
		const handleResize = () => {
			checkSearchWrap();
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<Section className={styles.searchableList}>
			<header className={styles.header}>
				<div className={styles.headerContainer} ref={headerContainerRef}>
					{withBackButton && (
						<Button
							className={styles.backButton}
							backgroundColor='white-100'
							color='black-900'
							onClick={handleGoBack}
						>
							<IconArrowShort />
							Назад
						</Button>
					)}
					<h3 className={styles.title}>{title}</h3>
					<Button
						className={styles.addButton}
						rootClassName={styles.buttonRoot}
						backgroundColor='white-100'
						color='black-900'
						onClick={onAdd}
					>
						<span>+</span>
						{buttonText}
					</Button>
					<div
						className={cn(styles.search, isWrapped ? styles.wrapped : '')}
						ref={searchRef}
					>
						<IconSearch resizable />
						<input
							className={styles.input}
							type='search'
							placeholder='Поиск по карточкам'
							value={searchQuery}
							onChange={handleSearchQueryChange}
						/>
					</div>
				</div>
			</header>

			{children}
		</Section>
	);
};
