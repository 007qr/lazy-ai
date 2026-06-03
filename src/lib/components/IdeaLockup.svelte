<script lang="ts">
	import LiveTicker from './LiveTicker.svelte';

	let idea = $state('');

	const placeholder = 'Tell me your business idea';

	function submit(event: SubmitEvent) {
		event.preventDefault();
		const trimmed = idea.trim();
		if (!trimmed) return;
		// Hand off to the reservation flow.
		console.log('Launching:', trimmed);
	}
</script>

<div class="rounded-xl bg-(--color-terminal) p-[18px] text-left shadow-2xl shadow-black/10">
	<div class="mb-3 flex items-center gap-2">
		<span class="size-[7px] rounded-full bg-[#34c84a]"></span>
		<span class="font-mono text-[10px] tracking-[0.08em] text-neutral-500 uppercase">
			Live · founders building right now
		</span>
	</div>

	<LiveTicker />

	<div class="my-3 h-px bg-neutral-800"></div>

	<form class="flex items-center gap-2.5" onsubmit={submit}>
		<span class="font-mono text-[13px] text-neutral-500" aria-hidden="true">&gt;</span>

		<div class="relative flex-1">
			<input
				bind:value={idea}
				type="text"
				name="idea"
				aria-label={placeholder}
				autocomplete="off"
				class="caret-input w-full bg-transparent font-mono text-[13px] text-neutral-200 placeholder:text-neutral-500 focus:outline-none"
				{placeholder}
			/>
		</div>

		<button
			type="submit"
			class="cursor-pointer rounded-md bg-white px-3 py-1.5 font-sans text-[12px] font-medium text-(--color-ink) transition-opacity hover:opacity-90"
		>
			Start →
		</button>
	</form>
</div>

<style>
	/* Blinking block caret matching the terminal aesthetic. */
	.caret-input {
		caret-color: #d4d4d4;
		caret-shape: block;
	}
</style>
