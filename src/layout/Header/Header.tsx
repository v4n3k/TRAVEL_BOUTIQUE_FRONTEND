import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { IconBurgerMenu } from '../../icons/IconBurgerMenu';
import { IconLogo } from '../../icons/IconLogo';
import { IconSearch } from '../../icons/IconSearch';
import { RouteName } from '../../types';
import styles from './Header.module.css';

export const Header = () => {
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
	const [isInputOpen, setIsInputOpen] = useState(false);

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

	useEffect(() => {
		if (isInputOpen) {
			inputRef.current?.focus();
		}
	}, [isInputOpen]);

	const [shouldMountPhone, setShouldMountPhone] = useState(false);
	useEffect(() => {
		let timeoutId = null as any;

		if (!isInputOpen) {
			timeoutId = setTimeout(() => {
				setShouldMountPhone(true);
			}, 300);
		} else {
			setShouldMountPhone(false);
		}

		return () => clearTimeout(timeoutId);
	}, [isInputOpen]);

	const [shouldMountSearch, setShouldMountSearch] = useState(false);
	useEffect(() => {
		let timeoutId = null as any;

		if (isInputOpen) {
			timeoutId = setTimeout(() => {
				setShouldMountSearch(true);
			}, 300);
		} else {
			setShouldMountSearch(false);
		}

		return () => clearTimeout(timeoutId);
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
								<Link to={RouteName.EXCURSIONS} onClick={handleClose}>
									экскурсии
								</Link>
							</li>
							<li>
								{' '}
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
							<Link to={RouteName.EXCURSIONS}>экскурсии</Link>
						</li>
						<li>
							<Link to={RouteName.ABOUT}>о нас</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className={styles.search}>
				<IconSearch />
				<input type='search' placeholder='Город, экскурсия...' />
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
				<div ref={phoneRef} className={styles.phone}>
					<p>+ 7 988 999 46 53</p>
				</div>
			</CSSTransition>

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
						/>
					</CSSTransition>
				</div>
			</CSSTransition>
		</header>
	);
};
