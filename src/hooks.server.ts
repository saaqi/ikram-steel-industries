// src/hooks.server.js
// @ts-expect-error no type declarations are provided by the package
import { minify } from 'html-minifier-terser'

import { building } from '$app/env'

const minification_options = {
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  decodeEntities: true,
  html5: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: false, // Recommended: keep false if hydration issues occur
  removeOptionalTags: true
}

/** @type {import('@sveltejs/kit/hooks').Handle} */
export async function handle({ event, resolve }) {
  return resolve(event, {
    transformPageChunk: ({ html, done }) => {
      // Only minify during the production build
      if (building && done) {
        return minify(html, minification_options)
      }
      return html
    }
  })
}
