<script>
  // !Important: Do not remove.
  const { children } = $props()
  import '#styles/style.scss'
  import '@fontsource-variable/inter'
  import 'boxicons/css/boxicons.min.css'

  import { LoadingAnimation, Navigation, Footer, GoTop } from '#components'

  // Canonical URL for SEO
  import { page } from '$app/state'
  import { appData } from '#lib/appData.ts'
</script>

<svelte:head>
  <link
    rel="canonical"
    href={page.url.href.startsWith(appData.baseURL) ? page.url.href : appData.baseURL + page.url.pathname}
  />
</svelte:head>

<LoadingAnimation />
<Navigation />
<main>
  {@render children()}
</main>
<GoTop />
<Footer />
