import * as sitemap from 'super-sitemap';
export const prerender = true;

export const GET = async () => {
	return await sitemap.response({
		origin: 'https://ikramsteel.com',
		defaultChangefreq: 'monthly',
		defaultPriority: 0.8,
		processPaths: (paths) => {
			return paths.map((p) => {
				// Remove trailing slash and split by '/'
				const cleanedPath = p.path.replace(/\/$/, '');
				const segments = cleanedPath.split('/').filter(Boolean); // only non-empty parts

				const priority =
					segments.length === 0
						? 1.0
						: segments.length === 1
							? 0.8
							: segments.length === 2
								? 0.6
								: 0.4;
				const changefreq = segments.length === 0 ? 'weekly' : 'monthly';

				return {
					...p,
					lastmod: new Date().toISOString().split('T')[0],
					priority: priority,
					changefreq: changefreq
				};
			});
		}
	});
};
