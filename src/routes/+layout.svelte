<script>
  // !Important: Do not remove.
  const { children } = $props()
  import '#styles/style.scss'
  import '@fontsource-variable/inter'
  import 'boxicons/css/boxicons.min.css'

  import LoadingAnimation from '#components/LoadingAnimation.svelte'
  import Navigation from '#components/Navigation.svelte'
  import Footer from '#components/Footer.svelte'
  import GoTop from '#components/GoTop.svelte'

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
