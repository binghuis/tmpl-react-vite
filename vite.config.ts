import generouted from '@generouted/react-router/plugin';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    generouted(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  resolve: { alias: { '@': '/src' } },
  server: {
    host: true,
    proxy: {
      '/api': {
        target: '//',
        // rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true,
      },
      '/mock': {
        target: '//',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mock/, ''),
      },
    },
  },
});
