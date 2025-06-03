import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 5173,
		host: '127.0.0.1',
		allowedHosts: [
			'xn--90aciandhd9bwfddfe6f.xn--p1ai',
			'www.xn--90aciandhd9bwfddfe6f.xn--p1ai',
			'localhost',
			'127.0.0.1',
			'243.252.88.103',
		],
	},
});
