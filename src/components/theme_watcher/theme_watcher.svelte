<script lang="ts">
	import * as DropdownMenu from '@/components/ui/dropdown-menu';
	import Button from '@/components/ui/button/button.svelte';
	import { Check, Palette } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let themeOptions = [
		// Trailblazers
		'trailblazer',
		'march-7th',
		'dan-heng',
		'himeko',
		'welt',
		// Stellaron Hunters
		'kafka',
		'silver-wolf',
		'blade',
		'firefly',
		// Herta Space Station
		'herta',
		'arlan',
		'asta',
		'ruan-mei',
		// Jarilo-IV
		'bronya',
		'clara',
		'gepard',
		'hook',
		'luka',
		'lynx',
		'natasha',
		'pela',
		'sampo',
		'seele',
		'serval',
		// Xianzhou Luofu
		'bailu',
		'imbibitor-lunae',
		'fu-xuan',
		'guinaifen',
		'hanya',
		'huohuo',
		'jing-yuan',
		'jingliu',
		'luocha',
		'qingque',
		'sushang',
		'tingyun',
		'xueyi',
		'yanqing',
		'yukong',
		// Penacony
		'black-swan',
		'gallagher',
		'misha',
		'sparkle',
		'acheron',
		'aventurine',
		'robin',
		// Miscellaneous
		'argenti',
		'dr-ratio',
		'topaz-numby',
		'boothill',
		'jade'
	];
	themeOptions = themeOptions.sort();

	function capitalizeFirstLetter(string: string) {
		let strings = string.split('-');
		for (let i = 0; i < strings.length; i++) {
			strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
		}
		return strings.join(' ');
	}
	function setTheme(theme: string) {
		document.body.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}

	onMount(() => {
		const theme = localStorage.getItem('theme');
		if (theme) {
			setTheme(theme);
		}
	});
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="tertiary" size="icon">
			<Palette class="h-5 w-5" />
			<span class="sr-only">Toggle theme</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end" class="max-h-[368px] overflow-y-scroll">
		{#each themeOptions as option}
			<DropdownMenu.Item class="flex flex-row gap-2" on:click={() => setTheme(option)}>
				<div class="aspect-square h-4 w-4">
					{#if option === localStorage.getItem('theme')}
						<Check class="h-4 w-4" />
					{/if}
				</div>
				<span>{capitalizeFirstLetter(option)}</span>
			</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
