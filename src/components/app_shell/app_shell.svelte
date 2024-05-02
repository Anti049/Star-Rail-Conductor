<script lang="ts">
	// Slots
	/**
	 * @slot appHeader - Insert fixed header content, such as an app bar.
	 * @slot sidebarLeft - Insert content for the left sidebar. Hidden when empty.
	 * @slot sidebarRight - Insert content for the right sidebar. Hidden when empty.
	 * @slot pageHeader - Insert content that resides above your page content. Good for global alerts.
	 * @slot pageFooter - Insert content that resides below your page content. Recommended for most layouts.
	 * @slot pageContent - Insert your main page content here.
	 * @slot appFooter - Insert fixed footer content. Not recommended for most layouts.
	 */

	// Types
	import type { CssClasses, SvelteEvent } from '@/utils';

	// Props
	export let regionPageClasses: CssClasses = '';

	// Base classes
	const cAppShellClasses = 'w-full h-full flex flex-col overflow-hidden';

	// Reactive classes
	$: appShellClasses = `${cAppShellClasses} ${$$props.class ?? ''}`;
	$: appHeaderClasses = '';
</script>

<div id="appShell" class={appShellClasses} data-testid="app-shell">
	<!-- Slot: Header -->
	{#if $$slots.appHeader}
		<header id="shell-header" class="flex-none {appHeaderClasses}">
			<slot name="appHeader" />
		</header>
	{/if}
</div>
