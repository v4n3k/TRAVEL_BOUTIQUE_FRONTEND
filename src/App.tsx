import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRouter } from './AppRouter';
import { Layout } from './layout/Layout';
import { SearchQueryProvider } from './providers/SearchQueryProvider';

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<SearchQueryProvider>
				<Layout>
					<AppRouter />
				</Layout>
			</SearchQueryProvider>
		</QueryClientProvider>
	);
};

export default App;
