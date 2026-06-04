<script lang="ts">
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import IdeaLockup from '$lib/components/IdeaLockup.svelte';
</script>

<svelte:head>
	<title>ideatorun — Go ahead, be lazy. Let AI run your business.</title>
	<meta
		name="description"
		content="Reserve your spot. Our AI plans, builds the tech, replies to customers and runs your business for you."
	/>
</svelte:head>

<SiteHeader />

<!-- Single full-viewport frame: headline, lockup and copy all fit without scrolling. -->
<section class="flex min-h-svh flex-col items-center justify-center px-6 py-24">
	<div class="w-full max-w-[460px]">
		<h1
			class="mb-8 text-center font-serif text-[clamp(2.25rem,6vw,3rem)] leading-[1.05] tracking-[-0.015em]"
		>
			<span class="italic">Go ahead, be lazy.</span><br />
			Let AI run your business.
		</h1>

		<IdeaLockup />

		<p class="mt-4 text-center font-mono text-[11px] tracking-[0.03em] text-(--color-muted)">
			4,598 business launched
		</p>

		<div
			class="mt-8 space-y-3 text-left font-sans text-[15px] leading-[1.65] text-(--color-muted)"
		>
			<p>
				You're meant to <span class="border-b border-(--color-muted)">own</span> something. Whether
				it's an idea you got in the shower, or an existing business, our AI runs it for you. It's
				your co-partner that never sleeps, complains or stops.
			</p>
			<p>
				It plans for you, handles the tech, replies to customers, manages your social media. So, you
				got an idea? run with it.
			</p>
		</div>
	</div>
</section>
