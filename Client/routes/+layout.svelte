<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import * as Sidebar from '$lib/components/ui/sidebar';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<Sidebar.Provider>
	<Sidebar.Root>
		<Sidebar.Header>
			<h2 class="px-2 text-lg font-bold">BrugteBiler</h2>
		</Sidebar.Header>

		<Sidebar.Content>
			<Sidebar.Group>
				<Sidebar.GroupLabel>Menu</Sidebar.GroupLabel>

				<Sidebar.GroupContent>
					<Sidebar.Menu>
						<Sidebar.MenuItem>
							<Sidebar.MenuButton href="/">
								Forside
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>

						<Sidebar.MenuItem>
							<Sidebar.MenuButton href="/biler">
								Biler
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
						<Sidebar.MenuItem>
							<Sidebar.MenuButton href="/salg">
								Sælg din bil
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>

					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		</Sidebar.Content>
	</Sidebar.Root>

	<Sidebar.Inset>
		<Sidebar.Trigger />

{@render children()}
	</Sidebar.Inset>
</Sidebar.Provider>
