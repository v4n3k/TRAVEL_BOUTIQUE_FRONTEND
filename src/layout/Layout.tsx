import { useLocation } from 'react-router-dom';
import { LayoutProps } from '../types/props';
import { RouteName } from '../types/routes';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import styles from './Layout.module.css';
import { Main } from './Main/Main';

export const Layout = ({ children }: LayoutProps) => {
	const { pathname } = useLocation();

	const isAuthPage = pathname.includes(RouteName.SIGN_IN);

	return (
		<div className={styles.layout}>
			{!isAuthPage && <Header />}
			<Main>{children}</Main>
			{!isAuthPage && <Footer />}
		</div>
	);
};
