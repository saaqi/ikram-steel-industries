<script>
	import './Navigation.scss';
	import isiLogo from '$assets/isi_logo.svg';
	import { onMount } from 'svelte';

	// import { onNavigate } from '$app/navigation';
	// onNavigate((navigation) => {
	// 	if (!document.startViewTransition) return;
	// 	// Prevent animation if navigating to the same URL
	// 	if (navigation.from?.url.pathname === navigation.to?.url.pathname) {
	// 		return;
	// 	}
	// 	return new Promise((resolve) => {
	// 		document.startViewTransition(async () => {
	// 			resolve();
	// 			await navigation.complete;
	// 		});
	// 	});
	// });

	onMount(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 150) {
				document.querySelector('body').classList.add('dark');
			} else {
				document.querySelector('body').classList.remove('dark');
			}
		});
	});

	onMount(async () => {
		await import('./Navigation.js')
	});
</script>

<header class="site-header">
	<div class="container flex">
		<a href="#our-products" class="shop-link" title="Shop Link" aria-label="Shop Link">
			<i class="bx bx-store"></i>
		</a>
		<!-- SITE LOGO -->
		<div class="title-area site-title py-1">
			<a href="#home" title="Ïkram Steel Industries Home Section">
				<img
					src={isiLogo}
					alt="Ikram Steel Industries & Re-Rolling Mills"
					height="55"
					draggable="false"
					loading="lazy"
				/>
			</a>
		</div>
		<!-- Main Navigation -->
		<button
			class="menu-toggle link-primary"
			aria-label="Navigation Menu Button"
			aria-expanded="false"
			aria-pressed="false"
			title="Navigation Menu"
		>
			<i class="bx bx-menu toggle-icon" style="font-size: 2em"></i>
		</button>
		<nav
			class="nav-primary"
			aria-label="Primary Navigation"
			itemscope
			itemtype="https://schema.org/SiteNavigationElement"
		>
			<ul id="primary-menu" class="primary-menu list-unstyled mb-lg-0">
				<li class="menu-item active">
					<a href="#home">
						<i class="bx bx-home"></i> Home
					</a>
				</li>
				<li class="menu-item">
					<a href="#our-products">
						<i class="bx bx-shopping-bag"></i> Products
					</a>
				</li>
				<li class="menu-item">
					<a href="#why-us">
						<i class="bx bx-certification"></i> Why Us!
					</a>
				</li>
				<li class="menu-item">
					<a href="#our-team">
						<i class="bx bx-user-pin"></i> Our Team
					</a>
				</li>
				<li class="menu-item">
					<a href="#testimonials">
						<i class="bx bx-user-circle"></i> Testimonials
					</a>
				</li>
				<li class="menu-item">
					<a href="#gallery-section">
						<i class="bx bx-images"></i> Gallery
					</a>
				</li>
				<li class="menu-item">
					<a href="#contact-us">
						<i class="bx bxs-contact"></i> Contact Us!
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

