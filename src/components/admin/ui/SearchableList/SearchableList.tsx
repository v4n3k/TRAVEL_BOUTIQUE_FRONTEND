import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconArrowShort } from '../../../../icons/IconArrowShort';
import { IconSearch } from '../../../../icons/IconSearch';
import { SearchableListProps } from '../../../../types/props';
import { RouteName } from '../../../../types/routes';
import { cn } from '../../../../utils/cn';
import { Button } from '../../../ui/Button/Button';
import { Section } from '../../../ui/Section/Section';
import styles from './SearchableList.module.css';

export const SearchableList = <T extends Function>({
	className,
	title,
	buttonText,
	children,
	withBackButton = false,
	searchQuery,
	setSearchQuery,
	onAdd,
}: SearchableListProps<T>) => {
	const navigate = useNavigate();
	const [isWrapped, setIsWrapped] = useState(false);

	const headerContainerRef = useRef<HTMLDivElement>(null);
	const searchRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleGoBack = () => {
		navigate(RouteName.ADMIN);
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

	useEffect(() => {
		if (searchQuery && inputRef.current) {
			if (document.activeElement !== inputRef.current) {
				inputRef.current.focus();

				inputRef.current.setSelectionRange(
					searchQuery.length,
					searchQuery.length
				);
			}
		}
	}, [searchQuery]);

	return (
		<Section className={cn(styles.searchableList, className)}>
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
							ref={inputRef}
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
