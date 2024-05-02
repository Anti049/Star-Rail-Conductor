<!-- 
	@component
	## AppShell
	/**
	 * @slot appHeader - Insert fixed header content, such as an app bar.
	 * @slot sidebarLeft - Insert content for the left sidebar. Hidden when empty.
	 * @slot sidebarRight - Insert content for the right sidebar. Hidden when empty.
	 * @slot pageHeader - Insert content that resides above your page content. Good for global alerts.
	 * @slot pageContent - Insert your main page content here.
	 * @slot pageFooter - Insert content that resides below your page content. Recommended for most layouts.
	 * @slot appFooter - Insert fixed footer content. Not recommended for most layouts.
	 */
	
 -->
<script lang="ts">
	// Slots
	/**
	 * @slot appHeader - Insert fixed header content, such as an app bar.
	 * @slot sidebarLeft - Insert content for the left sidebar. Hidden when empty.
	 * @slot sidebarRight - Insert content for the right sidebar. Hidden when empty.
	 * @slot pageHeader - Insert content that resides above your page content. Good for global alerts.
	 * @slot pageContent - Insert your main page content here.
	 * @slot pageFooter - Insert content that resides below your page content. Recommended for most layouts.
	 * @slot appFooter - Insert fixed footer content. Not recommended for most layouts.
	 */

	// Types
	import type { CssClasses, SvelteEvent } from '@/utils';

	// Props
	/** Set 'scrollbar-gutter' style. */
	export let scrollbarGutter = 'auto';

	// Props (Regions)
	/** Apply arbitrary classes to the entire '#page' region. */
	export let regionPageClasses: CssClasses = '';
	/** Apply arbitrary classes to the 'appHeader' slot container element. */
	export let slotAppHeaderClasses: CssClasses = 'z-10';
	/** Apply arbitrary classes to the 'sidebarLeft' slot container element. */
	export let slotSidebarLeftClasses: CssClasses = 'w-auto';
	/** Apply arbitrary classes to the 'sidebarRight' slot container element. */
	export let slotSidebarRightClasses: CssClasses = 'w-auto';
	/** Apply arbitrary classes to the 'pageHeader' slot container element. */
	export let slotPageHeaderClasses: CssClasses = '';
	/** Apply arbitrary classes to the 'pageContent' slot container element. */
	export let slotPageContentClasses: CssClasses = '';
	/** Apply arbitrary classes to the 'pageFooter' slot container element. */
	export let slotPageFooterClasses: CssClasses = '';
	/** Apply arbitrary classes to the 'appFooter' slot container element. */
	export let slotAppFooterClasses: CssClasses = '';

	// Base classes
	const cAppShellClasses = 'w-full h-full flex flex-col overflow-hidden';
	const cContentClasses = 'w-full h-full flex overflow-hidden';
	const cPageClasses = 'flex flex-1 flex-col overflow-x-hidden';
	const cSidebarLeftClasses = 'flex-none overflow-x-hidden overflow-y-auto';
	const cSidebarRightClasses = 'flex-none overflow-x-hidden overflow-y-auto';

	// Reactive classes
	$: appShellClasses = `${cAppShellClasses} ${$$props.class ?? ''}`;
	$: appHeaderClasses = `${slotAppHeaderClasses}`;
	$: sidebarLeftClasses = `${cSidebarLeftClasses} ${slotSidebarLeftClasses}`;
	$: sidebarRightClasses = `${cSidebarRightClasses} ${slotSidebarRightClasses}`;
	$: pageHeaderClasses = `${slotPageHeaderClasses}`;
	$: pageContentClasses = `${slotPageContentClasses}`;
	$: pageFooterClasses = `${slotPageFooterClasses}`;
	$: appFooterClasses = `${slotAppFooterClasses}`;
</script>

<div id="appShell" class={appShellClasses} data-testid="app-shell">
	<!-- Slot: Header -->
	{#if $$slots.appHeader}
		<header id="shell-header" class="flex-none {appHeaderClasses}">
			<slot name="appHeader" />
		</header>
	{/if}
	<!-- Content Area -->
	<div class="flex-auto {cContentClasses}">
		<!-- Slot: Sidebar (Left) -->
		{#if $$slots.sidebarLeft}
			<aside id="shell-sidebar-left" class={sidebarLeftClasses}>
				<slot name="sidebarLeft" />
			</aside>
		{/if}
		<!-- Page -->
		<div
			id="page"
			class="{regionPageClasses} {cPageClasses}"
			style:scrollbar-gutter={scrollbarGutter}
			on:scroll
		>
			<!-- Slot: Page Header -->
			{#if $$slots.pageHeader}
				<header id="shell-page-header" class="flex-none {pageHeaderClasses}">
					<slot name="pageHeader">(slot:header)</slot>
				</header>
			{/if}
			<!-- Slot: Page Content (Default) -->
			<main id="shell-page-content" class="flex-auto {pageContentClasses}">
				<slot />
			</main>
			<!-- Slot: Page Footer -->
			{#if $$slots.pageFooter}
				<footer id="shell-page-footer" class="flex-none {pageFooterClasses}">
					<slot name="pageFooter" />
				</footer>
			{/if}
		</div>
		<!-- Slot: Sidebar (Right) -->
		{#if $$slots.sidebarRight}
			<aside id="shell-sidebar-right" class={sidebarRightClasses}>
				<slot name="sidebarRight" />
			</aside>
		{/if}
	</div>
	<!-- Slot: Footer -->
	{#if $$slots.appFooter}
		<footer id="shell-footer" class="flex-none {appFooterClasses}">
			<slot name="appFooter" />
		</footer>
	{/if}
</div>
