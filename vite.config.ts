import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 443,
		host: '127.0.0.1',
		allowedHosts: [
			'xn----9sbelapeid5cyafedff1g.xn--p1ai',
			'www.xn----9sbelapeid5cyafedff1g.xn--p1ai',
			'localhost',
			'127.0.0.1',
		],
	},
	base: '/',
	build: {
		outDir: 'dist',
		rollupOptions: {
			output: {},
		},
	},
});
