import { useLocation } from 'react-router-dom';
import { LayoutProps } from '../types/props';
import { RouteName } from '../types/routes';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import styles from './Layout.module.css';
import { Main } from './Main/Main';

export const Layout = ({ children }: LayoutProps) => {
	const { pathname } = useLocation();

	const isSignInPage = pathname.includes(RouteName.SIGN_IN);
	const isInternationalTravelsPage = pathname.includes(
		RouteName.INTERNATIONAL_TRAVELS
	);

	const showGlobalLayout = !isSignInPage && !isInternationalTravelsPage;

	return (
		<div className={styles.layout}>
			{showGlobalLayout && <Header />}
			<Main>{children}</Main>
			{showGlobalLayout && <Footer />}
		</div>
	);
};
