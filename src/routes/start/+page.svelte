<script lang="ts">
	import { goto } from '$app/navigation';
	import OptionPicker from '$lib/components/OptionPicker.svelte';
	import EditIcon from '$lib/components/icons/EditIcon.svelte';
	import GrowIcon from '$lib/components/icons/GrowIcon.svelte';

	const options = [
		{
			id: 'create',
			title: 'Create a new business',
			subtitle: 'Start from scratch',
			icon: EditIcon
		},
		{
			id: 'grow',
			title: 'Grow my business',
			subtitle: 'If you already have a business',
			icon: GrowIcon
		}
	];

	function choose(id: string) {
		if (id === 'create') {
			goto('/build');
		}
	}
</script>

<svelte:head>
	<title>ideatorun — Let's start</title>
</svelte:head>

<OptionPicker heading="Let's start. Select an option." {options} onselect={choose} />
