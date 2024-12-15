import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

const __dirname = import.meta.dirname;

export default defineConfig(({ command }) => ({
    plugins: [
        react(),
        svgr({
            svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
            include: '**/*.svg',
        }),
    ],
    server: {
        host: true,
        port: 3000,
    },
    resolve: {
        alias: {
            '~public': resolve(__dirname, 'public'),
            '~components': resolve(__dirname, 'src', 'components'),
            '~constants': resolve(__dirname, 'src', 'constants'),
            '~pages': resolve(__dirname, 'src', 'pages'),
            '~types': resolve(__dirname, 'src', 'types'),
            '~utils': resolve(__dirname, 'src', 'utils'),
            '~assets': resolve(__dirname, 'src', 'assets'),
        },
    },
    base: command === 'build' ? '/SergikEnergy/' : '/',
}));
