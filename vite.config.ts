import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __dirname = import.meta.dirname;

export default defineConfig(({ command }) => ({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@public': resolve(__dirname, 'public'),
      '@components': resolve(__dirname, 'src', 'components'),
      '@pages': resolve(__dirname, 'src', 'pages'),
      '@types': resolve(__dirname, 'src', 'types'),
      '@utils': resolve(__dirname, 'src', 'utils'),
    },
  },
  base: command === 'build' ? '/SergikEnergy/' : '/',
}));
