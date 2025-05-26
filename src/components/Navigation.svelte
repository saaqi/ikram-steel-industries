<script>
	import './navigation.scss';
	import isiLogo from '$assets/isi_logo.svg';
	import { navItems } from './navItems.js';
	import { onMount } from 'svelte';
	onMount(async () => await import('$components/navigation.js'));

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
				{#each navItems as { href, text, icon }, index ('nav-item-' + index)}
					<li class="menu-item">
						<a {href}>
							<i class="bx {icon}"></i>
							{text}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
