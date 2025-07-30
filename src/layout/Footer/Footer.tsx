import { Link, useLocation } from 'react-router-dom';
import { useCheckIsAuth } from '../../hooks/api/useCheckIsAuth';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { IconTelegram } from '../../icons/IconTelegram';
import { IconWhatsApp } from '../../icons/IconWhatsApp';
import { RouteName } from '../../types/routes';
import {
	openWhatsApp,
	TELEGRAM_URL,
	WHATS_APP_URL,
} from '../../utils/redirect';
import styles from './Footer.module.css';

export const Footer = () => {
	const { pathname } = useLocation();
	const { isAuth } = useCheckIsAuth();
	const isMobile = useMediaQuery('(max-width: 800px)');
	const isAdminPage = pathname.includes('admin');

	const showExtendedNav = isAuth && isAdminPage && !isMobile;

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.navigation}>
					<div className={styles.topContainer}>
						<nav>
							<ul>
								{showExtendedNav ? (
									<>
										<li>
											<Link to={RouteName.CATEGORIES}>категории</Link>
										</li>
										<li>
											<Link to={RouteName.BLOG}>блог</Link>
										</li>
										<li>
											<Link to={RouteName.ABOUT}>о нас</Link>
										</li>
										<li>
											<Link to={RouteName.INFO}>информация</Link>
										</li>
										<li>
											<Link to={RouteName.SERVICE}>услуги</Link>
										</li>
									</>
								) : (
									<>
										<li>
											<Link to={RouteName.HOME}>главная</Link>
										</li>
										<li>
											<Link to={RouteName.CATEGORIES}>экскурсии</Link>
										</li>
										<li>
											<Link to={RouteName.ABOUT}>о нас</Link>
										</li>
									</>
								)}
							</ul>
						</nav>
					</div>
				</div>

				<div className={styles.info}>
					<div className={styles.bottomContainer}>
						<div className={styles.bankDetails}>
							<p>
								<span>Корреспондентский счет</span>
								<span>30101810145250000974</span>
							</p>
							<p>
								<span>Расчетный счет</span>
								<span>40702810510000682163</span>
							</p>
							<p>
								<span>Код отрасли по ОКПО</span>
								<span>44936273</span>
							</p>
							<div className={styles.inner}>
								<p>
									<span>РТО</span>
									<span>В031-00161-77/02341956</span>
								</p>
								<p>
									<span>ОГРН</span>
									<span>1207200010962</span>
								</p>
								<p>
									<span>ИНН</span>
									<span>7203505232</span>
								</p>
								<p>
									<span>КПП</span>
									<span>720301001</span>
								</p>
								<p>
									<span>БИК</span>
									<span>44525974</span>
								</p>
							</div>
						</div>

						<div className={styles.partnership}>
							<button onClick={openWhatsApp}>Стать нашим партнёром</button>
							<button onClick={openWhatsApp}>Стать частью нашей команды</button>
						</div>

						<div className={styles.contacts}>
							<h2>Контакты</h2>
							<div className={styles.phones}>
								<p>8-499-391-61-31</p>
								<p>8-999-359-16-01</p>
							</div>
							<p className={styles.email}>butik20@inbox.ru</p>
							<div className={styles.icons}>
								<a
									href={TELEGRAM_URL}
									target='_blank'
									rel='noopener noreferrer'
								>
									<IconTelegram />
								</a>
								<a
									href={WHATS_APP_URL}
									target='_blank'
									rel='noopener noreferrer'
								>
									<IconWhatsApp />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
