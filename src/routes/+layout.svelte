<script>
	import Separator from '@/components/ui/separator/separator.svelte';
	import '../app.pcss';
	import AppShell from '@/components/app_shell/app_shell.svelte';
	import Switch from '@/components/ui/switch/switch.svelte';
	import Label from '@/components/ui/label/label.svelte';
	import Button from '@/components/ui/button/button.svelte';
	import { ModeWatcher as ModeWatcherUtility } from 'mode-watcher';
	import { Sun, Moon, Bell } from 'lucide-svelte';
	import { Toaster } from '@/components/ui/sonner';
	import { toast } from 'svelte-sonner';
	import * as DropdownMenu from '@/components/ui/dropdown-menu';
	import ThemeWatcher from '@/components/theme_watcher/theme_watcher.svelte';
	import ModeWatcher from '@/components/mode_watcher/mode_watcher.svelte';
	import TitleBar from '@/components/title_bar/title_bar.svelte';
	import clsx from 'clsx';

	let showAppHeader = true;
	let showAppFooter = true;
	let showPageHeader = true;
	let showPageFooter = true;
	let showSidebarLeft = true;
	let showSidebarRight = true;
	let mini = false;
</script>

<ModeWatcherUtility />
<Toaster richColors />
<AppShell class="skeleton text-surface-900-50-token font-star-rail  text-sm">
	<!-- Title Bar -->
	<svelte:fragment slot="titleBar">
		<TitleBar />
	</svelte:fragment>
	<!-- App Header -->
	<svelte:fragment slot="appHeader">
		{#if showAppHeader}
			<div
				class="decoration-surface-300-400-token bg-surface-100-800-token border-surface-900-50-token flex h-16 flex-row items-center gap-2 border-b p-4 pr-2 dark:border-surface-500"
			>
				<h1 class="w-full text-white">App Header</h1>
				<Button
					on:click={() =>
						toast.success('This is a toast message', {
							description: 'Test Message',
							action: { label: 'Undo', onClick: () => console.info('Undo') }
						})}
					size="icon"
					variant="ghost"
				>
					<Bell class="h-5 w-5" />
					<span class="sr-only">Show notifications</span>
				</Button>
				<ModeWatcher />
				<ThemeWatcher />
			</div>
		{/if}
	</svelte:fragment>
	<!-- App Footer -->
	<svelte:fragment slot="appFooter">
		{#if showAppFooter}
			<div class="bg-surface-100-800-token h-16">
				<h1 class="">App Footer</h1>
			</div>
		{/if}
	</svelte:fragment>
	<!-- Page Header -->
	<svelte:fragment slot="pageHeader">
		{#if showPageHeader}
			<div class="h-16 bg-primary-500">
				<h1 class="text-on-primary-token">Page Header</h1>
			</div>
		{/if}
	</svelte:fragment>
	<!-- Page Footer -->
	<svelte:fragment slot="pageFooter">
		{#if showPageFooter}
			<div class="h-16 bg-secondary-500">
				<h1 class="text-on-secondary-token">Page Footer</h1>
			</div>
		{/if}
	</svelte:fragment>
	<!-- Sidebar (Left) -->
	<svelte:fragment slot="sidebarLeft">
		{#if showSidebarLeft}
			<div class={clsx('bg-surface-200-700-token h-full transition-all', mini ? 'w-20' : 'w-64')}>
				<h1 class="text-white">Sidebar (Left)</h1>
			</div>
		{/if}
	</svelte:fragment>
	<!-- Sidebar (Right) -->
	<svelte:fragment slot="sidebarRight">
		{#if showSidebarRight}
			<div class="h-full w-64 bg-tertiary-100 dark:bg-tertiary-900">
				<h1 class="text-on-tertiary-token">Sidebar (Right)</h1>
			</div>
		{/if}
	</svelte:fragment>
	<!-- Page Content -->
	<div class="bg-surface-50-900-token h-full w-full p-2">
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
			<div class="flex h-full flex-row items-center gap-2 align-middle">
				<Switch id="mini-sidebar" bind:checked={mini} />
				<Label for="mini-sidebar">Mini Sidebar</Label>
			</div>
		</div>
		<Separator class="my-4" />
		<slot />
	</div>
</AppShell>
