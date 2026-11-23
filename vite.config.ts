// import adapter from '@sveltejs/adapter-auto';
import cssnano from 'cssnano'
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import { sveltekit } from '@sveltejs/kit/vite'
import adapter from '@sveltejs/adapter-cloudflare'
import { enhancedImages } from '@sveltejs/enhanced-img'
import purgeCSSPlugin from '@fullhuman/postcss-purgecss'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
// const bootstrap = 'node_modules/bootstrap';

export default defineConfig({
  plugins: [
    enhancedImages(),
    sveltekit({
      compilerOptions: {
        // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
        runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
      },
      preprocess: [vitePreprocess()],
      adapter: adapter(),
      prerender: {
        entries: ['*', '/sitemap.xml']
      }
    })
  ],

  css: {
    postcss: {
      plugins:
        process.env.NODE_ENV === 'production'
          ? [
              // 1. Add vendor prefixes first so PurgeCSS can see the final selectors
              autoprefixer(),

              // 2. Purge unused styles based on finalized vendor structures
              purgeCSSPlugin({
                content: ['./src/app.html', './src/**/*.{svelte,ts,js,html}'],
                safelist: {
                  standard: [
                    /svelte-/
                    // /modal-/ /* Bootstrap modal */,
                    // /show/ /* toggled by Bootstrap JS */
                  ]
                },
                defaultExtractor: (content) => {
                  // Handles standard classes + Svelte's class: directive
                  const matches = content.match(/[A-Za-z0-9-_:/]+/g) || []
                  return matches.map((match) => match.replace(/^class:/, ''))
                },
                keyframes: true,
                variables: true
              }),

              // 3. Minify the remaining clean CSS at the very end
              cssnano({
                preset: [
                  'default',
                  {
                    discardComments: { removeAll: true },
                    reduceCustomProperties: false
                  }
                ]
              })
            ]
          : []
    }
  },

  server: {
    port: 3000
  },

  build: {
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false
      }
    }
  }
})
