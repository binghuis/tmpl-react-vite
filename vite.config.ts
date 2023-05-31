import generouted from '@generouted/react-router/plugin';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import turboConsole from "vite-plugin-turbo-console";
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    build: { sourcemap: command === 'serve' },
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
      visualizer({ template: 'treemap' }) as any,
      viteCompression({ algorithm: 'brotliCompress' }),
      turboConsole()
    ],
    resolve: { alias: { '@': '/src' } },
    server: {
      host: true,
      proxy: {
        '/api': {
          target: '//',
          changeOrigin: true,
        },
        '/mock': {
          target: '//',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/mock/, ''),
        },
      },
    },
  };
});
