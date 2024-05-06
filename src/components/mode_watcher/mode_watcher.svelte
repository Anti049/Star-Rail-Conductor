<script lang="ts">
	import * as DropdownMenu from '@/components/ui/dropdown-menu';
	import Button from '@/components/ui/button/button.svelte';
	import { ModeWatcher, toggleMode, resetMode, setMode, mode } from 'mode-watcher';
	import { Sun, Moon, Computer } from 'lucide-svelte';
	import { onMount } from 'svelte';

	export let system = true;
	export let dropdown = false;
	let themeMode: 'light' | 'dark' | undefined = $mode;
	let modeOptions = ['light', 'dark', 'system'];

	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function cycleMode() {
		if (themeMode === 'light') {
			themeMode = 'dark';
		} else if (themeMode === 'dark') {
			themeMode = system ? 'light' : undefined;
		} else {
			themeMode = 'light';
		}
		setMode(themeMode || 'system');
	}

	$: themeMode = $mode;
</script>

{#if dropdown}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger asChild let:builder>
			<Button builders={[builder]} variant="ghost" size="icon">
				{#if $mode === 'light'}
					<Sun class="h-5 w-5" />
				{:else if $mode === 'dark'}
					<Moon class="h-5 w-5" />
				{:else}
					<Computer class="h-5 w-5" />
				{/if}
				<span class="sr-only">Toggle theme</span>
			</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content align="end">
			<DropdownMenu.Item on:click={() => setMode('light')}>Light</DropdownMenu.Item>
			<DropdownMenu.Item on:click={() => setMode('dark')}>Dark</DropdownMenu.Item>
			<DropdownMenu.Item on:click={() => setMode('system')}>System</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
{:else}
	<Button on:click={cycleMode} variant="ghost" size="icon">
		{#if themeMode === 'light'}
			<Sun class="h-5 w-5" />
		{:else if themeMode === 'dark'}
			<Moon class="h-5 w-5" />
		{:else}
			<Computer class="h-5 w-5" />
		{/if}
		<span class="sr-only">Toggle theme</span>
	</Button>
{/if}
