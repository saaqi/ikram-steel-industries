<script>
	// import gallery from './Gallery.json';
	import { onMount } from 'svelte';
	onMount(async () => {
		await import('/node_modules/fslightbox');
	});

	// Import all .webp images from the gallery folder eagerly
	const gallery = import.meta.glob('/src/assets/gallery/*.webp', {
		eager: true,
		import: 'default'
	});

	// Convert the imported object into [filename, path] pairs
	const entries = Object.entries(gallery);

	// A map to pair images with their thumbnails
	const groupedImages = {};

	for (const [path, fullPath] of entries) {
		const filename = path.split('/').pop(); // e.g. "gallery01Thumb.webp"
		const isThumb = /Thumb/i.test(filename);
		const baseName = filename.replace(/Thumb/i, '').replace(/\.(webp|jpg|png)$/, '');

		if (!groupedImages[baseName]) groupedImages[baseName] = {};

		// isThumb? (groupedImages[baseName].thumb = fullPath) : (groupedImages[baseName].image = fullPath);
		groupedImages[baseName][isThumb ? 'thumb' : 'image'] = fullPath;
	}

	// Convert the grouped image objects into a structured array
	const galleryArray = Object.values(groupedImages).map((entry, index) => ({
		image: entry.image,
		thumb: entry.thumb,
		title: `Gallery Image ${index + 1}`
	}));
</script>

<section id="gallery" class="gallery-section">
	<div class="container">
		<h3 class="section-heading h4"><i class="bx bx-images"></i> Gallery</h3>
		<div id="homegallery" class="homegallery row g-3">
			{#each galleryArray as { image, thumb, title }, index ('iks-gallery-' + index)}
				<a class="col-6 col-lg-3" href={image} data-fslightbox="gallery">
					<img
						class="img-fluid rounded shadow-sm border border-primary-subtle"
						src={thumb}
						draggable="false"
						loading="lazy"
						width="450"
						alt={title}
						height="253"
					/>
				</a>
			{/each}
		</div>
	</div>
</section>
