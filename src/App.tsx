import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.module.css';
import { AppRouter } from './AppRouter';
import { Layout } from './layout/Layout';

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<AppRouter />
			</Layout>
		</QueryClientProvider>
	);
};

export default App;
