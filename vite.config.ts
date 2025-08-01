import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@pages': path.resolve(__dirname, './src/pages'),
			'@components': path.resolve(__dirname, './src/components'),
			'@models': path.resolve(__dirname, './src/models'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@stores': path.resolve(__dirname, './src/stores'),
		},
	},
});
