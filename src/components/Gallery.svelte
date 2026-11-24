<script>
  import { onMount } from 'svelte'

  // fslightbox attaches itself to the page, so it must run in the browser after render
  onMount(async () => {
    await import('fslightbox')
    window.refreshFsLightbox()
  })

  // Thumbnails: processed by enhanced-img (returns an object with sources + img)
  const thumbs = import.meta.glob('/src/assets/gallery/*Thumb.webp', {
    eager: true,
    query: { enhanced: true, w: '450', format: 'avif;webp' },
    import: 'default'
  })

  // Full-size images: plain URLs. The second pattern excludes the thumbnails.
  const fulls = import.meta.glob(['/src/assets/gallery/*.webp', '!/src/assets/gallery/*Thumb.webp'], {
    eager: true,
    query: '?url',
    import: 'default'
  })

  /** Strip folder, "Thumb" suffix and extension: ".../gallery01Thumb.webp" -> "gallery01" */
  // @ts-expect-error: This Module Exists typescript doesn't recognize enhanced imports
  const baseName = (path) =>
    path
      .split('/')
      .pop()
      .replace(/Thumb(?=\.\w+$)/, '')
      .replace(/\.\w+$/, '')

  // Pair each thumbnail with its full-size image by base name
  const pairs = {}

  for (const [path, mod] of Object.entries(thumbs)) {
    const name = baseName(path)
    // @ts-expect-error: This Module Exists typescript doesn't recognize enhanced imports
    pairs[name] = { ...pairs[name], thumb: mod }
  }
  for (const [path, url] of Object.entries(fulls)) {
    const name = baseName(path)
    // @ts-expect-error: This Module Exists typescript doesn't recognize enhanced imports
    pairs[name] = { ...pairs[name], image: url }
  }

  // Keep only complete pairs, in a stable order
  const galleryArray = Object.entries(pairs)
    .filter(([, v]) => v.image && v.thumb)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([name, v], index) => ({
      id: name,
      image: v.image,
      thumb: v.thumb,
      title: `Gallery Image ${index + 1}`
    }))

  // Warn (in the terminal during build) about files without a partner
  const incomplete = Object.entries(pairs).filter(([, v]) => !v.image || !v.thumb)
  if (incomplete.length) {
    console.warn(
      'Gallery: incomplete pairs skipped:',
      incomplete.map(([name]) => name)
    )
  }
</script>

<section id="gallery" class="gallery-section">
  <div class="container">
    <h3 class="section-heading h4">
      <i class="bx bx-images"></i>
      Gallery
    </h3>
    <div id="homegallery" class="homegallery row g-3">
      {#each galleryArray as { id, image, thumb, title } (id)}
        <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
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
