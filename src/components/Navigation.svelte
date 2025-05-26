<script>
	import isiLogo from '$assets/isi_logo.svg';
	import { navItems } from './navItems.js';
	import { onMount } from 'svelte';
	// onMount(async () => await import('$components/navigation.js'));

	onMount(async () => {
		/* ## Set Mobile Navigation stuff
--------------------------------------------- */
		// selecting the element
		const navLinks = document.querySelectorAll(
			'.primary-menu .menu-item a, .go-top a, .site-title a, .shop-link'
		);
		const menuButton = document.querySelector('.menu-toggle');
		const navigation = document.querySelector('nav.nav-primary');
		const toggleIcon = document.querySelector('.toggle-icon');

		// Functionality for main menu-toggle button
		menuButton.addEventListener('click', function () {
			// Show site navigation
			navigation.classList.toggle('show');

			// toggle activated class
			menuButton.classList.toggle('activated');

			// toggle attrs
			if (menuButton.getAttribute('aria-expanded') === 'true') {
				toggleIcon.classList.remove('bx-x');
			} else {
				toggleIcon.classList.add('bx-x');
			}

			if (menuButton.getAttribute('aria-expanded') === 'true') {
				menuButton.setAttribute('aria-expanded', 'false');
			} else {
				menuButton.setAttribute('aria-expanded', 'true');
			}

			if (menuButton.getAttribute('aria-pressed') === 'true') {
				menuButton.setAttribute('aria-pressed', 'false');
			} else {
				menuButton.setAttribute('aria-pressed', 'true');
			}
		});

		// Functionality of individual links
		for (var eachLink of navLinks) {
			eachLink.addEventListener('click', function () {
				// Hide Main Navigation on click
				navigation.classList.remove('show');

				// remove activated class and attrs from menu-toggle button
				menuButton.classList.remove('activated');
				menuButton.setAttribute('aria-expanded', 'false');
				menuButton.setAttribute('aria-pressed', 'false');
				toggleIcon.classList.remove('bx-x');
			});
		}

		navigation.setAttribute('tabindex', '-1');
		navigation.setAttribute('aria-hidden', 'true');

		/* ## SETUP SCROLL SPY
--------------------------------------------- */
		let menuSection = document.querySelectorAll('.nav-primary li.menu-item a');
		// for clickable event
		menuSection.forEach((v) => {
			v.onclick = () => {
				setTimeout(() => {
					menuSection.forEach((j) => j.classList.remove('active'));
					v.classList.add('active');
				}, 300);
			};
		});
		// for window scrolldown event
		window.onscroll = () => {
			let mainSection = document.querySelectorAll('main section');

			mainSection.forEach((v, i) => {
				let rect = v.getBoundingClientRect().y;

				if (rect < window.innerHeight - window.innerHeight + 56) {
					/* caculate till section reaches to top */
					menuSection.forEach((v) => v.classList.remove('active'));
					menuSection[i].classList.add('active');
				}
			});
		};
	});

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
