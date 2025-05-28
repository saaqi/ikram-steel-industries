<script>
	// import '$styles/toplink.scss';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { menuExpanded } from './sharedState.js';

	let show = false;
	onMount(() => {
		window.addEventListener('scroll', () => {
			window.scrollY >= 150 ? (show = true) : (show = false);
		});
	});
</script>

{#if show}
	<div class="go-top" transition:fade>
		<button
			class="top fs-4 rounded-circle p-1 btn btn-outline-primary"
			title="Go to Top"
			aria-label="Go to Top"
			onclick={() => {
				menuExpanded.set(false);
				window.scrollTo({
           top: 0,
           behavior: "smooth",
       });
			}}
		>
			<i class="bx bx-arrow-to-top"></i>
		</button>
	</div>
{/if}

<style>
	button {
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		z-index: 2;
		line-height: 0;
	}
</style>
