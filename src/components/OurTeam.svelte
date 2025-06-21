<script>
	import basharatButt from '$assets/team/basharat_butt.webp?enhanced&w=300&format=avif;webp';
	import javedButt from '$assets/team/javed_butt.webp?enhanced&w=300&format=avif;webp';
	import tariqButt from '$assets/team/tariq_butt.webp?enhanced&w=300&format=avif;webp';
	import saleemButt from '$assets/team/saleem_butt.webp?enhanced&w=300&format=avif;webp';

	const teamMembers = [
		{
			name: 'Basharat Ali Butt',
			position: 'Managing Director',
			image: basharatButt,
			alt: 'Mr. Basharat Ali'
		},
		{
			name: 'Javed Butt',
			position: 'Chief Executive Officer',
			image: javedButt,
			alt: 'Mr. Javed Butt',
			contact: [
				{ icon: 'bxs-mobile', link: 'tel:+923008644389', label: '0300-8644389' },
				{ icon: 'bxl-whatsapp-square', link: 'https://wa.me/+923008644389', label: '0300-8644389' }
			]
		},
		{
			name: 'Tariq Butt',
			position: 'Chief Operating Officer',
			image: tariqButt,
			alt: 'Mr. Tariq Butt'
		},
		{
			name: 'Saleem Butt',
			position: 'Head of Finance',
			image: saleemButt,
			alt: 'Mr. Saleem Butt',
			contact: [
				{ icon: 'bxs-envelope', link: 'mailto:ikramsteelindustries@gmail.com', label: 'E-Mail' },
				{ icon: 'bxs-mobile', link: 'tel:+923002709399', label: '0300-2709399' },
				{ icon: 'bxs-mobile', link: 'tel:+923218458939', label: '0321-8458939' },
				{ icon: 'bxl-whatsapp-square', link: 'https://wa.me/+923002709399', label: 'WhatsApp' }
			]
		}
	];
</script>

<section id="our-team" class="our-team">
	<div class="container">
		<h3 class="section-heading h4"><i class="bx bx-user-circle"></i> Our Team Members</h3>
		<div class="row g-3">
			{#each teamMembers as { name, position, image, alt, contact }, index (('team-member-', index))}
				<div class="team-widget col-6 col-lg-3">
					<div class="card card-warning bg-primary-subtle text-dark h-100">
						<div class="card-header">
							<h4 class="h6 mb-0 text-center h5">{position}</h4>
						</div>
						<enhanced:img
							sizes="(min-width: 300px) 300px, 100vw"
							class="img-fluid w-100"
							src={image}
							loading="lazy"
							{alt}
						/>
						<div class="card-body d-flex flex-column align-items-center align-items-sm-start">
							<h5 class="names">{name}</h5>
							{#if contact}
								<ul class="team-contact list-unstyled mt-3">
									{#each contact as { icon, link, label }, contactIndex (('contact-', contactIndex))}
										<li class="mb-3">
											<a href={link}><i class="bx {icon}"></i> {label}</a>
										</li>
									{/each}
								</ul>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
