<script>
	import isiLogo from '$assets/isi_logo.svg';
	import { navItems } from './navItems.js';
	import { onMount } from 'svelte';

	let expanded = $state(false);
	const onclick = () => {
		expanded = !expanded;
	};
	const close = () => {
		expanded = false;
	};

	onMount(async () => {
		/* ## Set Mobile Navigation stuff -------------------------------------------- */
		// selecting the element
		const menuButton = document.querySelector('.menu-toggle');
		const navigation = document.querySelector('nav.nav-primary');
		const toggleIcon = document.querySelector('.toggle-icon');

		// const navLinks = document.querySelectorAll('.go-top a');
		// navLinks.forEach(link => {
		// 	link.addEventListener('click', () => {
		// 		expanded = false;
		// 	});
		// })

		navigation.setAttribute('tabindex', '-1');
		navigation.setAttribute('aria-hidden', 'true');

		/* ## SETUP SCROLL SPY --------------------------------------------- */
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
		<a
			href="#our-products"
			class="shop-link"
			title="Shop Link"
			aria-label="Shop Link"
			onclick={close}
		>
			<i class="bx bx-store"></i>
		</a>
		<!-- SITE LOGO -->
		<div class="title-area site-title py-1">
			<a href="#home" title="Ïkram Steel Industries Home Section" onclick={close}>
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
			class="menu-toggle link-primary {expanded ? 'activated' : ''}"
			aria-label="Navigation Menu Button"
			aria-expanded={expanded ? 'true' : 'false'}
			aria-pressed={expanded ? 'true' : 'false'}
			title="Navigation Menu"
			{onclick}
		>
			<i class="bx {expanded ? 'bx-x' : 'bx-menu'} toggle-icon" style="font-size: 2em"></i>
		</button>
		<nav
			class="nav-primary {expanded ? 'show' : ''}"
			aria-label="Primary Navigation"
			itemscope
			itemtype="https://schema.org/SiteNavigationElement"
		>
			<ul id="primary-menu" class="primary-menu list-unstyled mb-lg-0">
				{#each navItems as { href, text, icon }, index ('nav-item-' + index)}
					<li class="menu-item">
						<a {href} onclick={close}>
							<i class="bx {icon}"></i>
							{text}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
<div class="navSpacer"></div>
