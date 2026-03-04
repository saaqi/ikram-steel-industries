import js from '@eslint/js';
import path from 'node:path';
import globals from 'globals';
import svelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import svelteConfig from './svelte.config.js';
import { includeIgnoreFile } from '@eslint/compat';

const gitignorePath = path.resolve(import.meta.dirname, '.gitignore');

export default defineConfig(
	// Ignore Files ...
	{ ignores: ['src/worker-configuration.d.ts'] },

	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		rules: {
			// typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
			// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			'no-undef': 'off'
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				svelteConfig
			}
		}
	}
);
