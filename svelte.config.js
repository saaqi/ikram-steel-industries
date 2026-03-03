import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess({ postcss: true })],
	kit: {
		adapter: adapter(),
		paths: { base: '' },
		alias: {
			$components: 'src/components',
			$styles: 'src/styles',
			$assets: 'src/assets'
		}
	}
};

export default config;
