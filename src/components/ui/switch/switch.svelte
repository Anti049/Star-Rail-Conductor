<script lang="ts">
	import { Switch as SwitchPrimitive } from 'bits-ui';
	import { cn } from '@/utils.js';

	type $$Props = SwitchPrimitive.Props;
	type $$Events = SwitchPrimitive.Events;

	let className: $$Props['class'] = undefined;
	export let checked: $$Props['checked'] = undefined;
	export { className as class };
</script>

<SwitchPrimitive.Root
	bind:checked
	class={cn(
		'data-[state=checked]:bg-primary-600 dark:data-[state=checked]:bg-primary-400 data-[state=unchecked]:bg-surface-600 dark:data-[state=unchecked]:bg-surface-400 peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
		className
	)}
	{...$$restProps}
	on:click
	on:keydown
>
	<SwitchPrimitive.Thumb
		class={cn(
			'data-[state=checked]:bg-primary-50-900-token data-[state=unchecked]:bg-surface-50-900-token pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
		)}
	/>
</SwitchPrimitive.Root>
