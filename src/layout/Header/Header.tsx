import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { IconBurgerMenu } from '../../icons/IconBurgerMenu';
import { IconLogo } from '../../icons/IconLogo';
import { IconSearch } from '../../icons/IconSearch';
import { useSearchStore } from '../../stores/useSearchStore';
import { RouteName } from '../../types';
import styles from './Header.module.css';

export const Header = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const searchQuery = useSearchStore(state => state.searchQuery);
	const setSearchQuery = useSearchStore(state => state.setSearchQuery);

	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
	const [isInputOpen, setIsInputOpen] = useState(false);

	const [shouldMountPhone, setShouldMountPhone] = useState(
		window.innerWidth <= 740
	);
	const [shouldMountSearch, setShouldMountSearch] = useState(false);

	const burgerMenuRef = useRef(null);
	const hideableSearchRef = useRef(null);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const phoneRef = useRef(null);

	const handleClick = () => {
		setIsBurgerMenuOpen(prev => !prev);
	};

	const handleClose = () => {
		setIsBurgerMenuOpen(false);
	};

	const toggleInput = () => {
		setIsInputOpen(prev => !prev);
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	const handleSearch = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			navigate(RouteName.SEARCHED_EXCURSIONS);
			queryClient.invalidateQueries({ queryKey: ['searchedExcursions'] });
		} else {
			console.log(e.key);
		}
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

	return (
		<header className={styles.header}>
			<div className={styles.iconBurgerMenu}>
				<button onClick={handleClick}>
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
			<div className={styles.search}>
				<IconSearch />
				<input
					type='search'
					placeholder='Город, экскурсия...'
					value={searchQuery}
					onChange={handleSearchChange}
					onKeyDown={e => handleSearch(e)}
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
						/>
					</CSSTransition>
				</div>
			</CSSTransition>
		</header>
	);
};
