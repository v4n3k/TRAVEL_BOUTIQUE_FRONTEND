import { useLocation } from 'react-router-dom';
import { RouteName } from '../../types/routes';
import { MainProps } from '../../types/props';
import { cn } from '../../utils/cn';
import styles from './Main.module.css';

export const Main = ({ children }: MainProps) => {
	const { pathname } = useLocation();

	const isAuthPage = pathname.includes(RouteName.SIGN_IN);

	return (
		<main className={cn(styles.main, !isAuthPage ? styles.limitedWidth : '')}>
			{children}
		</main>
	);
};
