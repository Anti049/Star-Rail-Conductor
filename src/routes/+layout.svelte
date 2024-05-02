<script>
	import Separator from '@/components/ui/separator/separator.svelte';
	import '../app.pcss';
	import AppShell from '@/components/app_shell/app_shell.svelte';
	import Switch from '@/components/ui/switch/switch.svelte';
	import Label from '@/components/ui/label/label.svelte';
	import Button from '@/components/ui/button/button.svelte';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { Sun, Moon, Bell } from 'lucide-svelte';
	import { Toaster } from '@/components/ui/sonner';
	import { toast } from 'svelte-sonner';

	let showAppHeader = true;
	let showAppFooter = true;
	let showPageHeader = true;
	let showPageFooter = true;
	let showSidebarLeft = true;
	let showSidebarRight = true;
</script>

<ModeWatcher />
<Toaster richColors />
<AppShell class="text-black dark:text-white">
	<!-- App Header -->
	<svelte:fragment slot="appHeader">
		{#if showAppHeader}
			<div class="flex h-16 flex-row items-center gap-2 bg-red-200 p-4 dark:bg-red-800">
				<h1 class="w-full text-white">App Header</h1>
				<Button
					on:click={() =>
						toast.success('This is a toast message', {
							description: 'Test Message',
							icon: Bell,
							action: { label: 'Undo', onClick: () => console.info('Undo') }
						})}
					variant="outline"
					size="icon"
				>
					<Bell class="h-[1.2rem] w-[1.2rem]" />
					<span class="sr-only">Show notifications</span>
				</Button>
				<Button on:click={toggleMode} variant="outline" size="icon">
					<Sun
						class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
			</div>
		{/if}
	</svelte:fragment>
	<!-- App Footer -->
	<svelte:fragment slot="appFooter">
		{#if showAppFooter}
			<div class="h-16 bg-blue-500">
				<h1 class="text-white">App Footer</h1>
			</div>
		{/if}
	</svelte:fragment>
	<!-- Page Header -->
	<svelte:fragment slot="pageHeader">
		{#if showPageHeader}
			<div class="h-16 bg-green-500">
				<h1 class="text-white">Page Header</h1>
			</div>
		{/if}
	</svelte:fragment>
	<!-- Page Footer -->
	<svelte:fragment slot="pageFooter">
		{#if showPageFooter}
			<div class="h-16 bg-yellow-500">
				<h1 class="text-white">Page Footer</h1>
			</div>
		{/if}
	</svelte:fragment>
	<!-- Sidebar (Left) -->
	<svelte:fragment slot="sidebarLeft">
		{#if showSidebarLeft}
			<div class="h-full w-64 bg-gray-500">
				<h1 class="text-white">Sidebar (Left)</h1>
			</div>
		{/if}
	</svelte:fragment>
	<!-- Sidebar (Right) -->
	<svelte:fragment slot="sidebarRight">
		{#if showSidebarRight}
			<div class="h-full w-64 bg-gray-500">
				<h1 class="text-white">Sidebar (Right)</h1>
			</div>
		{/if}
	</svelte:fragment>
	<!-- Page Content -->
	<div class="h-full w-full bg-white p-2 text-black dark:bg-black dark:text-white">
		<div class="flex flex-col gap-2">
			<div class="flex h-full flex-row items-center gap-2">
				<Switch id="show-app-header" bind:checked={showAppHeader} />
				<Label for="show-app-header">Show App Header</Label>
			</div>
			<div class="flex h-full flex-row items-center gap-2 align-middle">
				<Switch id="show-app-footer" bind:checked={showAppFooter} />
				<Label for="show-app-footer">Show App Footer</Label>
			</div>
			<div class="flex h-full flex-row items-center gap-2 align-middle">
				<Switch id="show-page-header" bind:checked={showPageHeader} />
				<Label for="show-page-header">Show Page Header</Label>
			</div>
			<div class="flex h-full flex-row items-center gap-2 align-middle">
				<Switch id="show-page-footer" bind:checked={showPageFooter} />
				<Label for="show-page-footer">Show Page Footer</Label>
			</div>
			<div class="flex h-full flex-row items-center gap-2 align-middle">
				<Switch id="show-sidebar-left" bind:checked={showSidebarLeft} />
				<Label for="show-sidebar-left">Show Sidebar (Left)</Label>
			</div>
			<div class="flex h-full flex-row items-center gap-2 align-middle">
				<Switch id="show-sidebar-right" bind:checked={showSidebarRight} />
				<Label for="show-sidebar-right">Show Sidebar (Right)</Label>
			</div>
		</div>
		<Separator class="my-4" />
		<slot />
	</div>
</AppShell>
