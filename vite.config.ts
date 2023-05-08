import generouted from '@generouted/react-router/plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), generouted()],
	resolve: { alias: { '@': '/src' } },
	server: {
		host: true,
		proxy: {
			'/api': {
				target: 'http://',
				rewrite: (path) => path.replace(/^\/api/, ''),
				changeOrigin: true,
			},
		},
	},
});
