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
	<section class="intro">
		
		<h1>Brugte biler</h1>
		<p>
			Vi har biler til en hver smag i en varierende pris klasse
		</p>
		<p>
			Vi har både din første bil og din næste bil 
		</p>
	</section>

	<section class="inventory" aria-label="Biler fra serveren">
		{#each data.cars as car}
			<article>
				<div>
					<h2>{car.make} {car.model}</h2>
					<p>{car.year} · {car.mileageKm.toLocaleString('da-DK')} km</p>
					<p> antal ejere {car.NumberOfOwners} </p>
				</div>
				<strong>{car.priceDkk.toLocaleString('da-DK')} kr.</strong>
			</article>
		{/each}
	</section>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
		background: #f6f7f9;
		color: #1f2933;
	}

	main {
		width: min(960px, calc(100% - 32px));
		margin: 0 auto;
		padding: 56px 0;
	}

	.intro {
		margin-bottom: 32px;
	}

	.eyebrow {
		margin: 0 0 8px;
		color: #2563eb;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0;
		text-transform: uppercase;
	}

	h1 {
		margin: 0 0 12px;
		font-size: clamp(2rem, 4vw, 3rem);
		line-height: 1.05;
	}

	p {
		max-width: 680px;
		margin: 0;
		color: #52606d;
		line-height: 1.6;
	}

	code {
		border-radius: 4px;
		background: #e4e7eb;
		padding: 2px 5px;
		font-size: 0.95em;
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
		border: 1px solid #d9e2ec;
		border-radius: 8px;
		background: #ffffff;
		padding: 18px 20px;
	}

	h2 {
		margin: 0 0 4px;
		font-size: 1.05rem;
	}

	strong {
		white-space: nowrap;
		color: #0f766e;
	}

	@media (max-width: 560px) {
		article {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>
