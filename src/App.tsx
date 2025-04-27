import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.module.css';
import { AppRouter } from './AppRouter';
import { Layout } from './layout/Layout';
import { useSearchStore } from './stores/useSearchStore';
import { RouteBase } from './types';

const queryClient = new QueryClient();

const App = () => {
	const { pathname } = useLocation();
	const setSearchQuery = useSearchStore(state => state.setSearchQuery);

	useEffect(() => {
		if (
			!pathname?.includes(RouteBase.EXCURSION) &&
			!pathname?.includes(RouteBase.SEARCHED_EXCURSIONS)
		) {
			setSearchQuery('');
		}
	}, [pathname]);

	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<AppRouter />
			</Layout>
		</QueryClientProvider>
	);
};

export default App;
