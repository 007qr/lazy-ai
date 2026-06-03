<script lang="ts">
	import { activity } from '$lib/data/activity';

	const LINE_HEIGHT = 24; // px, must match --line-height below
	const VISIBLE_LINES = 2;

	// Render the feed twice so the upward scroll wraps seamlessly.
	const loop = [...activity, ...activity];
	const distance = activity.length * LINE_HEIGHT;
</script>

<div
	class="overflow-hidden"
	style:height="{VISIBLE_LINES * LINE_HEIGHT}px"
	aria-label="Founders launching businesses right now"
>
	<ul
		class="ticker font-mono text-[12px] text-neutral-300"
		style:--line-height="{LINE_HEIGHT}px"
		style:--distance="{distance}px"
	>
		{#each loop as item, i (i)}
			<li class="flex gap-[0.4em] whitespace-nowrap" style:line-height="{LINE_HEIGHT}px">
				<span class="text-neutral-500">User in</span>
				<span>{item.city} launching</span>
				<span class="text-(--color-terminal-accent)">{item.venture}</span>
			</li>
		{/each}
	</ul>
</div>

<style>
	.ticker {
		animation: scroll-up 20s linear infinite;
		will-change: transform;
	}

	@keyframes scroll-up {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(calc(-1 * var(--distance)));
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.ticker {
			animation: none;
		}
	}
</style>
