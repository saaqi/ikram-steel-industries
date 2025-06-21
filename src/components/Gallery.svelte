<script>
	// Import all .webp images from the gallery folder eagerly
	// Files ending with Thumb.webp – use query params
	const thumbs = import.meta.glob('/src/assets/gallery/*Thumb.webp', {
		eager: true,
		query: {
			enhanced: true,
			w: '450',
			format: 'avif;webp'
		},
		import: 'default'
	});

	// All other .webp files – no query
	const others = import.meta.glob('/src/assets/gallery/!(*Thumb).webp', {
		eager: true,
		import: 'default'
	});

	// Combine both into a single object (if needed)
	const gallery = { ...thumbs, ...others };

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

	import { onMount } from 'svelte';
	onMount(async () => {
		await import('/node_modules/fslightbox');
	});
</script>

<section id="gallery" class="gallery-section">
	<div class="container">
		<h3 class="section-heading h4"><i class="bx bx-images"></i> Gallery</h3>
		<div id="homegallery" class="homegallery row g-3">
			{#each galleryArray as { image, thumb, title }, index ('iks-gallery-' + index)}
				<a class="col-6 col-lg-3" href={image} data-fslightbox="gallery" aria-label={title}>
					<enhanced:img
						sizes="(min-width: 450px) 450px, 100vw"
						class="img-fluid rounded shadow-sm border border-primary-subtle"
						src={thumb}
						draggable="false"
						loading="lazy"
						alt={title}
					/>
				</a>
			{/each}
		</div>
	</div>
</section>
