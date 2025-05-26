<script>
	import isiLogo from '$assets/isi_logo.svg';
	import { navItems } from './navItems.js';
</script>

<footer class="site-footer bg-warning pt-5 pb-2">
	<div class="footer-widgets container">
		<div class="row g-5">
			<div class="col-lg-4 text-center text-lg-start">
				<img
					class="img-fluid"
					src={isiLogo}
					draggable="false"
					alt="Ikram Steel Logo"
					height="300"
				/>
			</div>
			<div class="col-lg-4 col-sm-6">
				<h4 class="mb-4 border-bottom border-primary pb-2">Sitemap.</h4>
				<ul class="list-unstyled row g-3">
					{#each navItems as { href, text, icon }, index ('sitemap-item-' + index)}
						<li class="menu-item">
							<a class="fw-medium" {href}>
								<i class="bx {icon}"></i>
								{text}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="col-lg-4 col-sm-6">
				<h4 class="mb-4 border-bottom border-primary pb-2">Contact Us.</h4>
				<ul class="list-unstyled row g-3">
					<li>
						<a href="https://goo.gl/maps/VXY4dq9Ta4on3sor7" target="_blank">
							<i class="bx bxs-map-alt"></i> Sialkot Eminabad Road, a.k.a Deewan Road, Near Grid Station,
							Eminabad, Gujranwala
						</a>
					</li>
					<li>
						<a href="https://facebook.com/ikramsteelindustries" target="_blank">
							<i class="bx bxl-facebook-square"></i> Follow us on Facebook
						</a>
					</li>
					<li>
						<a href="mailto:ikramsteelindustries@gmail.com">
							<i class="bx bx-envelope"></i> Send us an E-Mail
						</a>
					</li>
					<li>
						<a href="tel:+923002709399">
							<i class="bx bxs-phone-call"></i> +92-300-2709399
						</a>
					</li>
					<li>
						<a href="tel:+923218458939">
							<i class="bx bxs-phone-call"></i> +92-321-8458939
						</a>
					</li>
					<li>
						<a href="https://wa.me/+923002709399" target="_blank">
							<i class="bx bxl-whatsapp"></i> WhatsApp
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="d-flex justify-content-between text-bg-warning flex-wrap pt-3">
			<div class="copyright">
				Copyright &#x000A9; <span id="year">2024</span> - Ikram Steel Industries
			</div>
			<div class="powered">
				Designed By
				<a
					class="link-primary"
					href="https://saqibtech.com"
					target="_blank"
					title="Saqib Islam - UI/UX Designer & Fullstack Developer."
					>Saaqi
				</a>
			</div>
		</div>
	</div>
</footer>
