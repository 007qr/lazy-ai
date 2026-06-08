<script lang="ts">
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import CheckIcon from '$lib/components/icons/CheckIcon.svelte';

	const perks = [
		'1 business',
		'30 night shifts (1 task/day)',
		'5 task credits/month',
		'Unlimited strategy & planning',
		'Database, Email, Browser included',
		'$5/mo AI credits for your business'
	];

	function startTrial() {
		console.log('Start 3-Day Free Trial');
	}
</script>

<svelte:head>
	<title>ideatorun — Your AI Employee</title>
</svelte:head>

<SiteHeader />

<section class="flex min-h-svh flex-col items-center justify-center px-6 py-24">
	<div class="w-full max-w-[400px]">
		<h1 class="font-serif text-[40px] leading-[1.05] tracking-[-0.015em]">Your AI Employee</h1>
		<p class="mt-3 font-sans text-[15px] text-(--color-ink)">
			Works every night while you sleep. Takes no holidays.
		</p>

		<h2 class="mt-10 font-serif text-[33px] leading-[1.05] tracking-[-0.015em]">3-Day Free Trial</h2>
		<p class="mt-1 font-sans text-[15px] text-(--color-muted)">Then $20/month</p>

		<p class="mt-7 font-sans text-[13px] font-medium text-(--color-ink)">You get:</p>
		<ul class="mt-2.5 space-y-2.5">
			{#each perks as perk (perk)}
				<li class="flex items-center gap-2.5 font-sans text-[13px] text-(--color-ink)">
					<CheckIcon class="shrink-0 text-(--color-ink)" />
					{perk}
				</li>
			{/each}
		</ul>

		<button
			type="button"
			onclick={startTrial}
			class="mt-9 flex h-[44px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-[32px] border border-(--color-ink) bg-(--color-ink) p-3 font-sans text-[15px] text-white transition-opacity hover:opacity-90"
		>
			Start 3-Day Free Trial
		</button>
	</div>
</section>
