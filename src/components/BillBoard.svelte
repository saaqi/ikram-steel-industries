<script>
	import pic from '$assets/gallery/gallery04.webp?enhanced&w=1600;800;400&format=avif;webp';
	const { billBoardPic = pic } = $props();
</script>

<section class="billboard py-0 mt-0" id="billboard">
	<div class="billboardContainer">
		<enhanced:img
			sizes="(min-width: 1600px) 1600px, 100vw"
			src={billBoardPic}
			alt="Billboard"
			class="img-fluid billBoardPic"
			width="1600"
			height="900"
		/>
	</div>
</section>

<style>
	section.billboard {
		min-height: auto;
	}
	.billboardContainer {
		max-height: 75svh;
	}
	.billBoardPic {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
</style>
