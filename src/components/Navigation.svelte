<script>
	import isiLogo from '$assets/isi_logo.svg';
	import { navItems } from './navItems.js';
	// import { onMount } from 'svelte';
	import { menuExpanded } from './sharedState.js';

	import { onNavigate } from '$app/navigation';
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		// Prevent animation if navigating to the same URL
		if (navigation.from?.url.pathname === navigation.to?.url.pathname) {
			return;
		}
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	const onclick = () => menuExpanded.set(!$menuExpanded);
	const close = () => menuExpanded.set(false);
</script>

<header class="site-header bg-light">
	<div class="container flex">
		<a href="/products" class="shop-link" title="Shop Link" aria-label="Shop Link" onclick={close}>
			<i class="bx bx-store"></i>
		</a>
		<!-- SITE LOGO -->
		<div class="title-area site-title py-1">
			<a href="/" title="Ïkram Steel Industries Home Section" onclick={close}>
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
			class="menu-toggle link-primary {$menuExpanded ? 'activated' : ''}"
			aria-label="Navigation Menu Button"
			aria-expanded={$menuExpanded ? 'true' : 'false'}
			aria-pressed={$menuExpanded ? 'true' : 'false'}
			title="Navigation Menu"
			{onclick}
		>
			<i class="bx {$menuExpanded ? 'bx-x' : 'bx-menu'} toggle-icon" style="font-size: 2em"></i>
		</button>
		<nav
			class="nav-primary {$menuExpanded ? 'show' : ''}"
			aria-label="Primary Navigation"
			itemscope
			itemtype="https://schema.org/SiteNavigationElement"
		>
			<ul id="primary-menu" class="primary-menu list-unstyled mb-lg-0">
				{#each navItems as { href, text, icon, active }, index ('nav-item-' + index)}
					<li class="menu-item">
						<a {href} onclick={close} class={active ? 'active' : ''}>
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

<style lang="scss">
	.navSpacer {
		height: 63px;
	}
	.site-header {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
		left: 0;
		position: fixed;
		top: 0;
		transition: all ease-in-out 0.3s;
		width: 100%;
		z-index: 99;

		.flex {
			align-items: center;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}

		.shop-link {
			font-size: 2em;
			line-height: 0;
		}
	}

	.primary-menu {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: flex-end;

		.menu-item a {
			color: #333;
			font-weight: 500;
			letter-spacing: 0.5px;
			text-transform: capitalize;
			text-decoration: none;
			&:hover {
				color: var(--bs-info);
				text-shadow: 1px 1px 2px rgba(#333, 0.5);
			}
		}
	}

	/* For Large Devices only */
	@media only screen and (min-width: 993px) {
		.shop-link {
			display: none;
		}

		.menu-toggle {
			display: none;
			opacity: 0;
			visibility: hidden;
		}

		.nav-primary {
			display: block;
			opacity: 1;
			visibility: visible;
		}
	}

	/* For Small Devices only */
	@media only screen and (max-width: 992px) {
		.site-header {
			background-color: var(--bs-warning);
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
		}

		.primary-menu {
			flex-direction: column;
			justify-content: flex-start;
			padding: 0 0 1rem 2rem;
		}

		.nav-primary {
			max-height: 0;
			overflow-y: scroll;
			transition: all 0.15s ease-out;
			visibility: hidden;
			opacity: 0;
			width: 100%;

			&.show {
				margin-top: 1rem;
				max-height: 100vh;
				transition: all 0.2s ease-in-out;
				visibility: visible;
				opacity: 1;
			}
		}

		.shop-link {
			display: block;
		}

		.menu-toggle {
			background: transparent;
			border: none;
			padding: 0;
		}

		.primary-menu .menu-item a {
			color: #333;

			&:hover {
				color: var(--bs-info);
				text-shadow: 1px 1px 2px rgba(#333, 0.5);
			}
		}

		.toggle-icon::before {
			display: inline-block;
			padding-right: 0;
			padding-top: 0.4rem;
			text-rendering: auto;
			transform: rotate(0);
			transition: transform 0.25s ease-in-out;
		}

		.activated .toggle-icon::before {
			transform: rotateY(180deg);
		}
	}

	/* Slide Trasnitions to the Navigation
	------------------------------------ */
	::view-transition-old(root),
	::view-transition-new(root) {
		animation-duration: 0.2s;
		animation-timing-function: ease-in;
	}

	::view-transition-old(root) {
		animation-name: slide-out-left;
	}

	::view-transition-new(root) {
		animation-name: slide-in-right;
	}

	/* Slide Out to Left */
	@keyframes slide-out-left {
		from {
			transform: translateY(0%);
			opacity: 1;
		}
		to {
			transform: translateY(-10%);
			opacity: 0;
		}
	}

	/* Slide In from Right */
	@keyframes slide-in-right {
		from {
			transform: translateY(10%);
			opacity: 0;
		}
		to {
			transform: translateY(0%);
			opacity: 1;
		}
	}
</style>
