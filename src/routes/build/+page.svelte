<script lang="ts">
	import { goto } from '$app/navigation';
	import OptionPicker from '$lib/components/OptionPicker.svelte';
	import SurpriseIcon from '$lib/components/icons/SurpriseIcon.svelte';
	import GrowIcon from '$lib/components/icons/GrowIcon.svelte';

	const options = [
		{
			id: 'surprise',
			title: 'Surprise me',
			subtitle: 'Our AI will come up with an idea',
			icon: SurpriseIcon
		},
		{
			id: 'build',
			title: 'Build my idea',
			subtitle: 'If you know what to build',
			icon: GrowIcon
		}
	];

	function choose(id: string) {
		// Both options lead to the trial screen.
		goto('/trial');
	}
</script>

<svelte:head>
	<title>ideatorun — Let's build it</title>
</svelte:head>

<OptionPicker heading="Let's build it." {options} onselect={choose} />
