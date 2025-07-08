import fs from 'fs';
import path from 'path';
import { data } from './app.js'; // adjust if needed

const siteUrl = data.baseURL;

function getStaticRoutes(dir = '.svelte-kit/output/prerendered/pages') {
	let routes = [];

	function walk(currentPath) {
		const entries = fs.readdirSync(currentPath, { withFileTypes: true });

		for (const entry of entries) {
			const entryPath = path.join(currentPath, entry.name);

			if (entry.isDirectory()) {
				walk(entryPath);
			} else if (entry.isFile() && entry.name.endsWith('.html')) {
				let route = path
					.relative(dir, entryPath)
					.replace(/index\.html$/, '')
					.replace(/\.html$/, '');

				if (!route.startsWith('/')) {
					route = '/' + route;
				}

				routes.push(route);
			}
		}
	}

	walk(dir);
	return routes;
}

function generateSitemap(routes) {
	const urls = routes
		.map((route) => {
			const encodedRoute = encodeURI(route);
			return `<url><loc>${siteUrl}${encodedRoute}</loc></url>`;
		})
		.join('');

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">
  ${urls}
</urlset>`.trim();
}

const routes = getStaticRoutes();
const sitemap = generateSitemap(routes);

fs.writeFileSync('static/sitemap.xml', sitemap);
fs.writeFileSync('.svelte-kit/output/client/sitemap.xml', sitemap);
fs.writeFileSync('.cloudflare/public/sitemap.xml', sitemap);
console.log('✅ Sitemap generated sitemap.xml');
