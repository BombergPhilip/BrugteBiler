<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Brugte biler</title>
	<meta
		name="description"
		content="Client/server-opdelt SvelteKit-projekt til brugte biler."
	/>
</svelte:head>

<main>
	<section class="hero">
		<div class="hero-content">
			<h1>Brugte biler til enhver smag</h1>
			<p>
				Vi har biler i mange prisklasser, uanset om du leder efter din første bil
				eller din næste.
			</p>
		</div>
	</section>

	<section class="content">
		<div class="section-heading">
			<p class="eyebrow">Udvalg</p>
			<h2>Biler fra lageret</h2>
		</div>

		<div class="inventory" aria-label="Biler fra serveren">
			{#each data.cars as car}
				<article>
					<div>
						<h3>{car.make} {car.model}</h3>
						<p>{car.year} · {car.mileageKm.toLocaleString('da-DK')} km</p>
						<p>Antal ejere: {car.NumberOfOwners}</p>
					</div>
					<strong>{car.priceDkk.toLocaleString('da-DK')} kr.</strong>
				</article>
			{/each}
		</div>
	</section>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
		background: #061220;
		color: #1f2933;
	}

	main {
		position: relative;
		isolation: isolate;
		min-height: 100vh;
		background-image: url('/hero-used-cars-building-sign.png');
		background-position: center;
		background-size: cover;
		background-attachment: fixed;
	}

	main::before {
		position: absolute;
		inset: 0;
		z-index: -1;
		background:
			linear-gradient(180deg, rgb(6 18 32 / 0.58), rgb(6 18 32 / 0.8)),
			linear-gradient(90deg, rgb(6 18 32 / 0.56), rgb(6 18 32 / 0.16) 62%);
		content: "";
	}

	.hero {
		display: grid;
		min-height: clamp(460px, 72vh, 760px);
		align-items: center;
		padding: 64px 24px;
	}

	.hero-content {
		width: min(760px, 100%);
		margin-left: max(24px, calc((100vw - 1120px) / 2));
		color: #ffffff;
	}

	.eyebrow {
		margin: 0 0 8px;
		color: #a7f3d0;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0;
		text-transform: uppercase;
	}

	h1 {
		margin: 0 0 12px;
		font-size: clamp(2.5rem, 7vw, 5.6rem);
		line-height: 1.05;
	}

	p {
		max-width: 680px;
		margin: 0;
		color: rgb(255 255 255 / 0.82);
		line-height: 1.6;
	}

	.hero p {
		color: rgb(255 255 255 / 0.9);
		font-size: clamp(1rem, 2vw, 1.25rem);
	}

	.content {
		width: min(960px, calc(100% - 32px));
		margin: 0 auto;
		padding: 48px 0 64px;
		color: #ffffff;
	}

	.section-heading {
		margin-bottom: 20px;
	}

	.section-heading h2 {
		margin: 0;
		font-size: clamp(1.6rem, 3vw, 2.25rem);
		line-height: 1.1;
	}

	.inventory {
		display: grid;
		gap: 12px;
	}

	article {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		border: 1px solid rgb(255 255 255 / 0.24);
		border-radius: 8px;
		background: rgb(6 18 32 / 0.68);
		box-shadow: 0 18px 44px rgb(0 0 0 / 0.18);
		backdrop-filter: blur(8px);
		padding: 18px 20px;
	}

	h3 {
		margin: 0 0 4px;
		font-size: 1.05rem;
	}

	strong {
		white-space: nowrap;
		color: #a7f3d0;
	}

	@media (max-width: 560px) {
		main {
			background-attachment: scroll;
		}

		.hero {
			min-height: 560px;
			align-items: end;
			padding: 48px 20px;
		}

		.hero-content {
			margin-left: 0;
		}

		article {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>
