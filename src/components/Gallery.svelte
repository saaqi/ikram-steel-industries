<script>
	import gallery from './Gallery.json';
</script>

<section id="gallery-section" class="gallery-section">
	<div class="container">
		<h3 class="section-heading h4"><i class="bx bx-images"></i> Gallery</h3>
		<div id="homegallery" class="homegallery row g-3">
			{#each gallery as { title, image, thumb }, index ('iks-gallery-' + index)}
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
