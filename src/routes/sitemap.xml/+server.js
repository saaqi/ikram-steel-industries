import fs from 'fs';
import path from 'path';
import { data } from '/src/app.js'; // Adjust the path as needed

const siteUrl = data.baseURL;

/**
 * Recursively collects all HTML files from the prerendered pages directory.
 */
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

export async function GET() {
	const routes = getStaticRoutes();

	const urls = routes
		.map((route) => {
			const encodedRoute = encodeURI(route);
			return `
    <url>
      <loc>${siteUrl}${encodedRoute}</loc>
    </url>`;
		})
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">
  ${urls}
</urlset>`.trim();

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
