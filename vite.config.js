// const IN_PRODUCTION = process.env.NODE_ENV === 'production';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
const IN_PRODUCTION = process.env.NODE_ENV === 'production';

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
const bootstrap = 'node_modules/bootstrap';

export default defineConfig({
	plugins: [
		sveltekit(),
	],

	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
			$components: path.resolve('./src/components'),
			$styles: path.resolve('./src/styles'),
			$assets: path.resolve('./src/assets')
		}
	},

	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern'
			}
		},
		postcss: {
			plugins: IN_PRODUCTION
				? [
					purgeCSSPlugin({
						content: [
							'./src/app.html',
							'./src/**/*.js',
							'./src/**/*.svelte',
							`${bootstrap}/js/dist/modal.js`
						],
						safelist: [/svelte-/, /modal-/],
						defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
						keyframes: true,
						variables: true
					}),
					cssnano({
						preset: ['default', { discardComments: { removeAll: true } }]
					}),
					autoprefixer()
				]
				: []
		}
	},

	// base: './',
	server: {
		port: 3000
	},

	build: {
		// outDir: './build',
		emptyOutDir: true,
		minify: 'terser',
		terserOptions: {
			format: {
				comments: false
			}
		}
	}
});
