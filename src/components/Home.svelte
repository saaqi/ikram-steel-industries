<script>
	const socialLinks = [
		{
			href: 'https://www.facebook.com/ikramsteelindustries/',
			icon: 'bxl-facebook-square',
			title: 'Follow us on Facebook!'
		},
		{
			href: 'https://goo.gl/maps/VXY4dq9Ta4on3sor',
			icon: 'bxs-map-alt',
			title: 'Visit Us'
		},
		{
			href: 'https://wa.me/+923002709399',
			icon: 'bxl-whatsapp-square',
			title: 'Send us a message on WhatsApp'
		},
		{
			href: 'mailto:ikramsteelindustries@gmail.com',
			icon: 'bxs-envelope',
			title: 'Send us an E-Mail'
		},
		{
			href: 'tel:+923002709399',
			icon: 'bxs-phone-call',
			title: 'Give us a Call'
		}
	];
</script>

<section id="home" class="home-section position-relative">
	<div class="overlay"></div>
	<div class="container py-3">
		<div class="row">
			<div class="col-lg-6 text-light text-center text-lg-start d-flex flex-column gap-3">
				<h1>Ikram Steel Industries & Re-Rolling Mills</h1>
				<h2 class="h5">
					are the leading manufacturers of steel rebars, renowned for their high-quality steel and
					commitment to excellence. Specializing in the production of Grade 60 and Grade 40 steel
					rebars, as well as Steel CC Billets.
				</h2>
				<div
					class="social-links d-flex gap-3 flex-row justify-content-center justify-content-lg-start"
				>
					<!-- <a class="fs-2 link-light" href="https://www.facebook.com/ikramsteelindustries/" target="_blank"
            title="Follow us on Facebook!">
            <i class='bx bxl-facebook-square'></i>
          </a> -->
					{#each socialLinks as { href, icon, title }, index ('socialLink-' + index)}
						<a
							class="fs-2 link-light"
							{href}
							{title}
							target="_blank"
							rel="noopener noreferrer nofollow"
							aria-labelledby={title.replace(/\s+/g, '-').toLowerCase()}
						>
							<i class="bx {icon}"></i>
						</a>
					{/each}
				</div>
				<div
					class="cta-buttons d-flex gap-2 flex-wrap justify-content-center justify-content-lg-start"
				>
					<a class="btn btn-secondary btn-lg fw-medium" href="tel:+923002709399">
						<i class="bx bxs-phone-call"></i> Call Now!
					</a>
					<a
						class="btn btn-outline-light btn-lg fw-medium"
						href="https://goo.gl/maps/VXY4dq9Ta4on3sor7"
						target="_blank"
					>
						<i class="bx bx-map"></i> Visit Us!
					</a>
				</div>
			</div>
			<div class="col-lg-6"></div>
		</div>
	</div>
</section>

<style lang="scss">
	.home-section {
		min-height: 100svh;
		.overlay {
			background-image: url('$assets/home-bg.svg');
			background-repeat: repeat;
			background-attachment: fixed;
			background-size: 60px;
			filter: brightness(80%);
			position: absolute;
			height: 100%;
			width: 100%;
			background-color: #333;
			z-index: 1;
		}
		.container {
			z-index: 2;
		}
		.cta-buttons {
			.btn {
				width: 8em;
			}
		}
	}
</style>
