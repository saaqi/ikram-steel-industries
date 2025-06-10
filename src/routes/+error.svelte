<script>
	import { page } from '$app/state';
	import { base } from '$app/paths';

	const emojis = {
		400: '❌', // Bad Request
		401: '🔒', // Unauthorized
		403: '⛔', // Forbidden
		404: '🚫', // Not Found
		429: '🐌', // Too Many Requests (slow down)
		500: '🤕', // Internal Server Error
		503: '🛠️', // Service Unavailable
		301: '➡️', // Moved Permanently
		302: '🔁' // Found (temporary redirect)
	};
</script>

<svelte:head>
	<title>ERROR {page.status} - {page.error.message}</title>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<div class="error-outer bg-body text-body">
	<div class="container py-5">
		<div id="notfound" class="row text-center py-3 justify-content-center gap-4">
			<div class="notfound-404 col-12">
				<h1 class="display-4 fw-bold">OOPS! <span>{emojis[page.status] ?? emojis[500]}</span></h1>
				<h2 class="my-4">ERROR {page.status}: {page.error.message}</h2>
			</div>
			<p class="col-12">
				Uh-oh! It seems the page you're looking for has either been removed, relocated, or may not
				exist at all. Before you venture further, double-check the URL in your browser. If all seems
				well, consider navigating back to our homepage to explore anew. Thanks for your
				understanding!
			</p>
			<a class="btn btn-secondary btn-lg col-md-6" href={base + '/'}>
				<i class="bx bx-home"></i> Go To Homepage
			</a>
		</div>
	</div>
</div>

<style>
	.container {
		max-width: 600px;
	}
</style>
