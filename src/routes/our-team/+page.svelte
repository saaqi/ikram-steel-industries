<script>
	import BillBoard from '$components/BillBoard.svelte';
	import OurTeam from '$components/OurTeam.svelte';
	import billboard from '$assets/gallery/gallery03.webp';
</script>

<svelte:head>
	<title>Meet Our Team! - Ikram Steel Industries</title>
	<meta
		name="description"
		content="Ikram Steel Industries aims to be a global leader in the steel manufacturing sector, driven by innovation, quality, and customer satisfaction. We are dedicated to building a sustainable future through our products and practices, contributing to the growth and development of the construction industry."
	/>
</svelte:head>

<div class="row">
	<BillBoard billBoardPic={billboard} />
	<OurTeam />
</div>
