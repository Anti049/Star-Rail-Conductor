<script lang="ts">
	import { appWindow } from '@tauri-apps/api/window';
	import { Maximize, Minimize, Minus, Square, X } from 'lucide-svelte';

	let title = '';

	async function getTitle() {
		title = await appWindow.title();
	}

	$: getTitle();
</script>

<div
	data-tauri-drag-region
	class="bg-surface-100-800-token fill-token left-0 right-0 top-0 flex h-10 w-[100vw] select-none flex-row items-center justify-end"
>
	<div class="pointer-events-none aspect-square h-full p-2">
		<img src="/favicon.png" class="h-6 w-6" alt="Icon" />
	</div>
	<div class="pointer-events-none h-full w-20" />
	<span class="text-on-surface-token pointer-events-none flex-grow text-center">{title}</span>
	<button
		id="titlebar-minimize"
		class="text-on-surface-token hover:bg-surface-300/80 dark:hover:bg-surface-500/80 inline-flex aspect-square h-full items-center justify-center bg-inherit"
		on:click={() => appWindow.minimize()}
	>
		<Minus class="text-surface-900-50-token h-5 w-5" />
	</button>
	<button
		id="titlebar-maximize"
		class="text-on-surface-token hover:bg-surface-300/80 dark:hover:bg-surface-500/80 inline-flex aspect-square h-full items-center justify-center bg-inherit"
		on:click={() => appWindow.toggleMaximize()}
	>
		<Square class="text-surface-900-50-token h-4 w-4" />
	</button>
	<button
		id="titlebar-close"
		class="text-on-surface-token hover:bg-error-500 inline-flex aspect-square h-full items-center justify-center bg-inherit"
		on:click={() => appWindow.close()}
	>
		<X class="text-surface-900-50-token h-6 w-6" />
	</button>
</div>
