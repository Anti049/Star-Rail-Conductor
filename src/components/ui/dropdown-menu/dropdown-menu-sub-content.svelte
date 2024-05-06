<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn, flyAndScale } from '@/utils.js';

	type $$Props = DropdownMenuPrimitive.SubContentProps;
	type $$Events = DropdownMenuPrimitive.SubContentEvents;

	let className: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = flyAndScale;
	export let transitionConfig: $$Props['transitionConfig'] = {
		x: -10,
		y: 0
	};
	export { className as class };
</script>

<DropdownMenuPrimitive.SubContent
	{transition}
	{transitionConfig}
	class={cn(
		'rounded-container-token border-token border-surface-600-300-token bg-surface-50-900-token text-surface-900-50-token z-50 min-w-[8rem] p-1 shadow-lg focus:outline-none',
		className
	)}
	{...$$restProps}
	on:keydown
	on:focusout
	on:pointermove
>
	<slot />
</DropdownMenuPrimitive.SubContent>
