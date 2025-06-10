<script>
	// !Important: Do not remove.
	const { children } = $props();
	import '@fontsource-variable/inter';
	import '$styles/style.scss';
	import 'boxicons/css/boxicons.min.css';

	import LoadingAnimation from '$components/LoadingAnimation.svelte';
	import Navigation from '$components/Navigation.svelte';
	import Footer from '$components/Footer.svelte';
	import GoTop from '$components/GoTop.svelte';

	// Canonical URL for SEO
	import { page } from '$app/stores';
	import { data } from '/src/app.js'
	const baseUrl = data.baseURL;
</script>

<svelte:head>
	<link
		rel="canonical"
		href={$page.url.href.startsWith(baseUrl) ? $page.url.href : baseUrl + $page.url.pathname}
	/>
</svelte:head>

<LoadingAnimation />
<Navigation />
<main>
	{@render children()}
</main>
<GoTop />
<Footer />
