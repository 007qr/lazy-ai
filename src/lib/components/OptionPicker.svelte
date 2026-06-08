<script lang="ts">
	import type { Component } from 'svelte';
	import SiteHeader from './SiteHeader.svelte';

	type Option = {
		id: string;
		title: string;
		subtitle: string;
		icon: Component<{ size?: number; class?: string }>;
	};

	let {
		heading,
		options,
		onselect
	}: {
		heading: string;
		options: Option[];
		onselect?: (id: string) => void;
	} = $props();
</script>

<SiteHeader />

<section class="flex min-h-svh flex-col items-center px-6 pt-[18vh] pb-24">
	<h1 class="mb-10 text-center font-serif text-[48px] leading-[100%] tracking-[-0.02em]">
		{heading}
	</h1>

	<div class="flex flex-col items-center gap-4">
		{#each options as option (option.id)}
			{@const Icon = option.icon}
			<button
				type="button"
				onclick={() => onselect?.(option.id)}
				class="flex h-[116px] w-[424px] max-w-full items-center justify-between rounded-2xl bg-[#e6e5e3] px-6 text-left transition-colors hover:bg-[#dedddb]"
			>
				<div>
					<p class="font-sans text-[17px] text-(--color-ink)">{option.title}</p>
					<p class="mt-1.5 font-sans text-[13px] text-(--color-muted)">{option.subtitle}</p>
				</div>

				<Icon class="shrink-0 text-(--color-ink)" />
			</button>
		{/each}
	</div>
</section>
