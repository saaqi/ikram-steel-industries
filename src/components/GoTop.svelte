<script>
	// import '$styles/toplink.scss';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let show = false;
	onMount(() => {
		window.addEventListener('scroll', () => {
			window.scrollY >= 150 ? (show = true) : (show = false);
		});
	});
</script>

{#if show}
	<div class="go-top" transition:fade>
		<a
			class="top fs-4 rounded-circle p-1 btn btn-outline-primary"
			href="#home"
			title="Go to Top"
			aria-label="Go to Top"
		>
			<i class="bx bx-arrow-to-top"></i>
		</a>
	</div>
{/if}

<style lang="scss">
	.go-top > a {
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		z-index: 2;
		line-height: 0;
	}

	.go-top a::before {
		padding: 0;
	}
</style>
