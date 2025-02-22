import './App.module.css';
import { AppRouter } from './AppRouter';
import { Layout } from './layout/Layout';

const App = () => {
	return (
		<Layout>
			<AppRouter />
		</Layout>
	);
};

export default App;
