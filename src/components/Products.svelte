<script>
	import rebars60Thumb from '$assets/gallery/rebars60Thumb.webp?enhanced&w=450&format=avif;webp';
	import rebars40Thumb from '$assets/gallery/rebars40Thumb.webp?enhanced&w=450&format=avif;webp';
	import steelBilletsThumb from '$assets/gallery/steelBilletsThumb.webp?enhanced&w=450&format=avif;webp';

	const products = [
		{
			image: rebars60Thumb,
			title: 'Steel Rebars - Grade 60',
			description:
				'Our Grade 60 Steel Rebars are designed to provide exceptional strength and durability for a wide range of construction applications. These rebars offer superior resistance to stress and seismic activity, making them ideal for use in high-stress environments such as bridges, high-rise buildings, and other large-scale infrastructure projects. Manufactured to meet the highest industry standards, our Grade 60 Steel Rebars ensure long-lasting performance and reliability.',
			sizes: [
				'1/4" * 40\' (2 soot)',
				'3/8" * 40\' (3 soot)',
				'1/2" * 40\' (4 soot)',
				'5/8" * 40\' (5 soot)',
				'3/4" * 40\' (6 soot)',
				'7/8" * 40\' (7 soot)',
				'01" * 40\' (8 soot)'
			]
		},
		{
			image: rebars40Thumb,
			title: 'Steel Rebars - Grade 40',
			description:
				'Our Grade 40 Steel Rebars are engineered to offer a balanced combination of strength and flexibility, making them an ideal choice for a variety of construction applications. They are perfect for use in residential and commercial building projects, providing the necessary support and stability. Known for their cost-effectiveness and reliable performance, our Steel Rebars meet stringent industry standards, ensuring the safety and longevity of your construction projects.',
			sizes: [
				'1/4" * 40\' (2 soot)',
				'3/8" * 40\' (3 soot)',
				'1/2" * 40\' (4 soot)',
				'5/8" * 40\' (5 soot)',
				'3/4" * 40\' (6 soot)',
				'7/8" * 40\' (7 soot)',
				'01" * 40\' (8 soot)'
			]
		},
		{
			image: steelBilletsThumb,
			title: 'Steel Billets ( CC )',
			description:
				'Our Steel CC (Continuous Casting) Billets are meticulously crafted using advanced continuous casting technology, ensuring uniform quality and consistency across every billet. These billets serve as the reliable foundational material for producing a wide range of high-quality steel products, including rebars, rods, and structural steel. Known for their superior purity, structural integrity, and excellent mechanical properties.',
			sizes: [
				'100mm * 100mm (100 Milimeter)',
				'130mm * 130mm (130 Milimeter)',
				'150mm * 150mm (150 Milimeter)'
			]
		}
	];
</script>

<section id="our-products" class="our-products">
	<div class="container">
		<h3 class="section-heading h4">
			<i class="bx bx-shopping-bag"></i> Premium Quality Steel Rebars and Billets
		</h3>
		<div class="row g-3">
			{#each products as { image, title, description, sizes }, index ('product-' + index)}
				<div class="product-widget col-sm-6 col-lg-4">
					<div class="card bg-info-subtle h-100 shadow">
						<enhanced:img
							sizes="(min-width: 450px) 450px, 100vw"
							class="card-img-top shadow-sm img-fluid"
							src={image}
							draggable="false"
							loading="lazy"
							alt="60 Grade Steel Rebars"
							width="450"
							height="253"
						/>
						<div class="card-body d-flex flex-column gap-3">
							<h4 class="h5">{title}</h4>
							<p class="product-description">
								{description}
							</p>
							<h5 class="h6">Avialable Sizes:</h5>
							<ul class="row g-2">
								{#each sizes as size, index ('availsize-' + index)}
									<li>{size}</li>
								{/each}
							</ul>
							<div class="mt-auto">
								<a class="btn btn-lg btn-primary" href="tel:+923002709399">
									<i class="bx bxs-shopping-bags"></i> Book Now!
								</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.product-description {
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		line-clamp: 4;
		max-height: 6em;
	}
</style>
