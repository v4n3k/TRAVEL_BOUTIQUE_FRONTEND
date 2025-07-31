import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { ScrollToTop } from './utils/scroll.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<HelmetProvider>
				<ScrollToTop />
				<App />
			</HelmetProvider>
		</BrowserRouter>
	</StrictMode>
);
