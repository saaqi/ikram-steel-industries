import path from 'path';
import cssnano from 'cssnano';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';
const IN_PRODUCTION = process.env.NODE_ENV === 'production';
// const bootstrap = 'node_modules/bootstrap';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],

	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
			$components: path.resolve('./src/components'),
			$styles: path.resolve('./src/styles'),
			$assets: path.resolve('./src/assets')
		}
	},

	css: {
		postcss: {
			plugins: IN_PRODUCTION
				? [
						purgeCSSPlugin({
							content: ['./src/app.html', './src/**/*.js', './src/**/*.svelte'],
							safelist: [/svelte-/],
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
