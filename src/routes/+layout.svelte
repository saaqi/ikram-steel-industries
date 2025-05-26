<script>
	// !Important: Do not remove.
	const { children } = $props();
	import '$styles/style.scss';
	import 'boxicons/css/boxicons.min.css';

	import LoadingAnimation from '$components/LoadingAnimation.svelte';
	import Navigation from '$components/Navigation.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<LoadingAnimation />
<Navigation />
<main>
	{@render children()}
</main>
<Footer />
