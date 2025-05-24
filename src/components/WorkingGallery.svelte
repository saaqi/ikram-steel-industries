<script>
	import { onMount } from 'svelte';

	const galleryList = [
		{ image: 'gallery01.webp', thumb: 'gallery01-thumb.webp' },
		{ image: 'rebars-40.webp', thumb: 'rebars-40-thumb.webp' },
		{ image: 'gallery02.webp', thumb: 'gallery02-thumb.webp' },
		{ image: 'gallery03.webp', thumb: 'gallery03-thumb.webp' },
		{ image: 'rebars-60-n.webp', thumb: 'rebars-60_thumb-n.webp' },
		{ image: 'gallery04.webp', thumb: 'gallery04-thumb.webp' },
		{ image: 'gallery05.webp', thumb: 'gallery05-thumb.webp' },
		{ image: 'steel-billets.webp', thumb: 'steel-billets-thumb.webp' }
	];

	let images = $state([]);

	onMount(async () => {
		let loadedImages = $state([]);

		// Iterate through your galleryList from the JSON
		for (const item of galleryList) {
			const fullImage = `/src/assets/gallery/${item.image}`; // Construct the full path to the image
			const thumbNail = `/src/assets/gallery/${item.thumb}`; // Construct the full path to the thumbnail

			try {
				// Dynamically import the image using Vite's import syntax
				// This will give you the processed URL for the image
				const image = await import(/* @vite-ignore */ fullImage);
				const thumb = await import(/* @vite-ignore */ thumbNail);

				loadedImages.push({
					image: image.default, // The default export is the image URL
					thumb: thumb.default // If you plan to use the thumbnail later
				});
			} catch (error) {
				console.error(`Failed to load image: ${fullImage + thumbNail}`, error);
			}
		}
		images = loadedImages;

		// Setup FSLightBox
		await import('/node_modules/fslightbox/index.js')
	});
</script>

<div class="gallery">
	<section id="gallery-section" class="gallery-section">
		<div class="container">
			<h3 class="section-heading h4"><i class="bx bx-images"></i> Gallery</h3>
			<div id="homegallery" class="homegallery row g-3">
				{#each images as { image, thumb }, index (image + index)}
					<a class="col-6 col-lg-3" href={image} data-fslightbox="gallery">
						<img
							class="img-fluid rounded shadow-sm border border-primary-subtle"
							src={thumb}
							draggable="false"
							loading="lazy"
							alt={'Gallery Image ' + index}
							width="450"
							height="253"
						/>
					</a>
				{/each}
			</div>
		</div>
	</section>
</div>
