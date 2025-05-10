import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { excursionApi } from '../../api/excursion/excursionApi';
import { useDebounce } from '../../hooks/useDebounce';
import { IconBurgerMenu } from '../../icons/IconBurgerMenu';
import { IconLogo } from '../../icons/IconLogo';
import { IconSearch } from '../../icons/IconSearch';
import { useSearchStore } from '../../stores/useSearchStore';
import { RouteName } from '../../types';
import styles from './Header.module.css';
import { SearchTips } from './SearchTips/SearchTips';

export const Header = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const searchQuery = useSearchStore(state => state.searchQuery);
	const setSearchQuery = useSearchStore(state => state.setSearchQuery);
	const debSearchQuery = useDebounce(searchQuery);

	const [areInputTipsOpen, setAreInputTipsOpen] = useState(false);
	const [areInputTipsOnMobileOpen, setAreInputTipsOnMobileOpen] = useState(
		false
	);
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
	const [isInputOpen, setIsInputOpen] = useState(false);

	const [shouldMountPhone, setShouldMountPhone] = useState(
		window.innerWidth <= 740
	);
	const [shouldMountSearch, setShouldMountSearch] = useState(false);

	const inputOnDesktopRef = useRef<HTMLInputElement | null>(null);
	const burgerMenuRef = useRef<HTMLDivElement>(null);
	const hideableSearchRef = useRef(null);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const phoneRef = useRef(null);

	const { data: searchTips } = useQuery({
		queryKey: ['searchTips', debSearchQuery],
		queryFn: () => excursionApi.getSearchTips(debSearchQuery),
	});

	const handleLogoClick = () => {
		setIsBurgerMenuOpen(prev => !prev);
		setIsInputOpen(false);
	};

	const handleClose = () => {
		setIsBurgerMenuOpen(false);
	};

	const toggleInput = () => {
		setIsInputOpen(prev => !prev);

		setTimeout(() => {
			isBurgerMenuOpen ? inputRef.current?.blur() : inputRef.current?.focus();
		}, 700);
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	const search = () => {
		navigate(RouteName.SEARCHED_EXCURSIONS);
		queryClient.invalidateQueries({
			queryKey: ['searchedExcursions', debSearchQuery],
		});
		inputOnDesktopRef.current?.blur();
		inputRef.current?.blur();
	};

	const handleSearch = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			search();
		}
	};

	const handleInputOnDesktopFocus = () => {
		setAreInputTipsOpen(true);
	};

	const handleInputOnDesktopBlur = () => {
		setTimeout(() => {
			setAreInputTipsOpen(false);
		}, 100);
	};

	const handleInputOnMobileFocus = () => {
		setAreInputTipsOnMobileOpen(true);
	};

	const handleInputOnMobileBlur = () => {
		setTimeout(() => {
			setAreInputTipsOnMobileOpen(false);
		}, 100);
	};

	useEffect(() => {
		if (isInputOpen) {
			inputRef.current?.focus();
		}
	}, [isInputOpen]);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout | null = null;

		const handleResize = () => {
			if (!isInputOpen && window.innerWidth <= 740) {
				timeoutId = setTimeout(() => {
					setShouldMountPhone(true);
				}, 300);
			} else {
				setShouldMountPhone(false);
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			if (timeoutId !== null) {
				window.removeEventListener('resize', handleResize);
				clearTimeout(timeoutId);
			}
		};
	}, [isInputOpen]);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout | null = null;

		if (isInputOpen) {
			timeoutId = setTimeout(() => {
				setShouldMountSearch(true);
			}, 300);
		} else {
			setShouldMountSearch(false);
		}

		return () => {
			if (timeoutId !== null) {
				clearTimeout(timeoutId);
			}
		};
	}, [isInputOpen]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				burgerMenuRef.current &&
				!burgerMenuRef.current.contains(event.target as Node)
			) {
				setIsBurgerMenuOpen(false);
			}
		};

		if (isBurgerMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isBurgerMenuOpen]);

	return (
		<header className={styles.header}>
			<div className={styles.iconBurgerMenu}>
				<button onClick={handleLogoClick}>
					<IconBurgerMenu />
				</button>
			</div>

			<CSSTransition
				nodeRef={burgerMenuRef}
				in={isBurgerMenuOpen}
				timeout={300}
				classNames={{
					enter: styles.burgerMenuEnter,
					enterActive: styles.burgerMenuEnterActive,
					exit: styles.burgerMenuExit,
					exitActive: styles.burgerMenuExitActive,
				}}
				unmountOnExit
				mountOnEnter
			>
				<div className={styles.burgerMenu} ref={burgerMenuRef}>
					<IconLogo />
					<nav>
						<ul>
							<li>
								<Link to={RouteName.HOME} onClick={handleClose}>
									главная
								</Link>
							</li>
							<li>
								<Link to={RouteName.CATEGORIES} onClick={handleClose}>
									экскурсии
								</Link>
							</li>
							<li>
								<Link to={RouteName.ABOUT} onClick={handleClose}>
									о нас
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</CSSTransition>

			<div className={styles.logo}>
				<Link to={RouteName.HOME}>
					<IconLogo />
				</Link>
			</div>
			<div className={styles.navigation}>
				<nav>
					<ul>
						<li>
							<Link to={RouteName.HOME}>главная</Link>
						</li>
						<li>
							<Link to={RouteName.CATEGORIES}>экскурсии</Link>
						</li>
						<li>
							<Link to={RouteName.ABOUT}>о нас</Link>
						</li>
					</ul>
				</nav>
			</div>

			<div className={styles.searchWrapper} style={{ position: 'relative' }}>
				<div className={styles.search}>
					<IconSearch />

					<input
						ref={inputOnDesktopRef}
						type='search'
						placeholder='Город, экскурсия...'
						value={searchQuery}
						onChange={handleSearchChange}
						onKeyDown={e => handleSearch(e)}
						onFocus={handleInputOnDesktopFocus}
						onBlur={handleInputOnDesktopBlur}
					/>
				</div>

				<SearchTips
					areOpen={areInputTipsOpen}
					tips={searchTips}
					onTipClick={search}
				/>
			</div>

			<CSSTransition
				nodeRef={phoneRef}
				in={shouldMountPhone && !isInputOpen}
				timeout={200}
				classNames={{
					enter: styles.phoneEnter,
					enterActive: styles.phoneEnterActive,
					exit: styles.phoneExit,
					exitActive: styles.phoneExitActive,
				}}
				unmountOnExit
				mountOnEnter
			>
				<div ref={phoneRef} className={styles.phoneOnSmallScreen}>
					<Link to='tel:+79889994653'>+ 7 988 999 46 53</Link>
				</div>
			</CSSTransition>

			<div className={styles.phone}>
				<Link to='tel:+79889994653'>+ 7 988 999 46 53</Link>
			</div>

			<div className={styles.hideableSearchWrapper}>
				<CSSTransition
					nodeRef={hideableSearchRef}
					in={true}
					timeout={300}
					classNames={{
						enter: styles.hideableSearchEnter,
						enterActive: styles.hideableSearchEnterActive,
						exit: styles.hideableSearchExit,
						exitActive: styles.hideableSearchExit,
					}}
				>
					<div
						ref={hideableSearchRef}
						className={`${styles.hideableSearch} ${
							isInputOpen ? styles.hideableSearchOpen : ''
						}`}
					>
						<button onClick={toggleInput}>
							<IconSearch />
						</button>

						<CSSTransition
							nodeRef={inputRef}
							in={shouldMountSearch}
							timeout={300}
							classNames={{
								enter: styles.inputEnter,
								enterActive: styles.inputEnterActive,
								exit: styles.inputExit,
								exitActive: styles.inputExitActive,
							}}
							unmountOnExit
							mountOnEnter
						>
							<input
								ref={inputRef}
								className={styles.input}
								type='search'
								placeholder='Город, экскурсия...'
								value={searchQuery}
								onChange={handleSearchChange}
								onKeyDown={e => handleSearch(e)}
								onFocus={handleInputOnMobileFocus}
								onBlur={handleInputOnMobileBlur}
							/>
						</CSSTransition>
					</div>
				</CSSTransition>
				<SearchTips
					areOpen={areInputTipsOnMobileOpen}
					tips={searchTips}
					mountingDelay={300}
					onTipClick={search}
				/>
			</div>
		</header>
	);
};
