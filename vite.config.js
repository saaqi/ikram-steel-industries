import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import webfontDownload from "vite-plugin-webfont-dl";
const IN_PRODUCTION = process.env.NODE_ENV === "production";
const IN_DEVELOPMENT = process.env.NODE_ENV === "development";

// Hide Preloader while in development.
const hidePreloader = () => {
  return {
    name: "hide-preloader",
    transformIndexHtml(html) {
      return html.replace(
        `<link rel="stylesheet" href="./src/scss/preloader.css">`,
        `<!-- <link rel="stylesheet" href="./src/scss/preloader.css"> -->`
      );
    }
  }
}

export default defineConfig({
  plugins: [
    // Hide Preloader while in Development
    IN_DEVELOPMENT && hidePreloader(),
    // Download and attach Google Fonts locally
    IN_PRODUCTION && webfontDownload([
      "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
    ]),
    // Minify Output HTML File
    IN_PRODUCTION && ViteMinifyPlugin({}),
  ],
  base: "./",
  server: {
    hot: true,
    port: 3000,
  },
  build: {
    // outDir: "./docs",
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false,
      },
    },
  },
});
