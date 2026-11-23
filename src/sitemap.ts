import fs from 'fs'
import path from 'path'
import { appData } from '#lib/appData.ts'

const siteUrl = appData.baseURL // base URL

function getStaticRoutes() {
  const prerenderedDir = '.svelte-kit/output/prerendered/pages'
  const routes: { route: string; filePath: string }[] = []

  function walk(dirPath: string, baseRoute = '') {
    if (!fs.existsSync(dirPath)) return

    const entries = fs.readdirSync(dirPath, { withFileTypes: true })

    for (const entry of entries) {
      const entryPath = path.join(dirPath, entry.name)
      const routeSegment = entry.name.replace(/\.svelte$/, '').replace(/\.html$/, '')

      if (entry.isDirectory()) {
        const nestedRoute = routeSegment === 'index' ? baseRoute : `${baseRoute}/${routeSegment}`
        walk(entryPath, nestedRoute)
      } else if (entry.isFile()) {
        if (!entry.name.endsWith('.svelte') && !entry.name.endsWith('.html')) continue
        if (entry.name.startsWith('+') || entry.name.startsWith('_')) continue

        let route = routeSegment === 'index' ? baseRoute : `${baseRoute}/${routeSegment}`
        if (!route.startsWith('/')) route = '/' + route

        routes.push({ route, filePath: entryPath })
      }
    }
  }

  // 1️⃣ Try prerendered pages first
  if (fs.existsSync(prerenderedDir)) {
    walk(prerenderedDir)
  }

  // 2️⃣ Fallback to src/routes if empty
  if (routes.length === 0) {
    walk('src/routes')
  }

  return routes
}

function generateSitemap(routes: { route: string; filePath: string }[]) {
  const urlEntries: string[] = []

  for (const { route, filePath } of routes) {
    const encoded = encodeURI(route)

    const lastmod = fs.existsSync(filePath)
      ? fs.statSync(filePath).mtime.toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0]

    let priority: string
    if (route === '/') {
      priority = '1.0'
    } else {
      const depth = route.split('/').filter(Boolean).length
      priority = depth === 1 ? '0.9' : '0.8'
    }

    const changefreq = route === '/' ? 'weekly' : 'monthly'

    urlEntries.push(`
  <url>
    <loc>${siteUrl}${encoded}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`)
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join('\n')}
</urlset>`.trim()
}

// Run generator
const routes = getStaticRoutes()
const sitemap = generateSitemap(routes)

if (!fs.existsSync('static')) fs.mkdirSync('static')
if (!fs.existsSync('build')) fs.mkdirSync('build')

fs.writeFileSync('static/sitemap.xml', sitemap)
fs.writeFileSync('.cloudflare/public/sitemap.xml', sitemap)

console.log('✅ Sitemap generated.')
