<script lang="ts">
	import { Toaster as Sonner, type ToasterProps as SonnerProps } from 'svelte-sonner';
	import { mode } from 'mode-watcher';

	type $$Props = SonnerProps;
</script>

<Sonner
	theme={$mode}
	class="toaster group"
	toastOptions={{
		classes: {
			toast:
				'group toast w-full p-2 flex flex-row bg-surface-200-700-token group-[.toaster]:text-on-surface-token group-[.toaster]:border-token group-[.toaster]:border-surface-500-400-token group-[.toaster]:shadow-lg rounded-container-token',
			success: 'group-[.toast]:bg-error-200-700-token group-[.toast]:text-on-success-token',
			description: 'group-[.toast]:text-on-surface-token',
			actionButton: 'group-[.toast]:bg-primary-500 group-[.toast]:text-on-primary-token',
			cancelButton: 'group-[.toast]:bg-error-200-700-token group-[.toast]:text-on-surface-token'
		}
	}}
	{...$$restProps}
/>
