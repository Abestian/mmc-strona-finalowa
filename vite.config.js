import Inspect from 'vite-plugin-inspect';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(() => {
	base: '/mmc-strona-finalowa/';

	return {
		plugins: [
			Inspect(),
			ViteImageOptimizer({
				png: {
					quality: 80,
				},
				jpg: {
					quality: 80,
				},
			}),
		],
		build: {
			rollupOptions: {
				input: {
					main: resolve(__dirname, 'index.html'),
					offer: resolve(__dirname, 'offer/index.html'),
					contact: resolve(__dirname, 'contact/index.html'),
				},
			},
		},
	};
});
