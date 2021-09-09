<script>
	import Card from './card.svelte';
	export let projects;

	let i = 0;

	$: project = projects[i];
	$: pLength = projects.length;

	function updateProject(inc) {
		if (inc) return increment();
		return decrement();
	}

	function increment() {
		if (i < pLength - 1) return i++;
		return (i = 0);
	}

	function decrement() {
		if (i > 0) return i--;
		return (i = pLength - 1);
	}
</script>

{#if project != null}
	<div class="content-center flex justify-around">
		<Card {...project} />
	</div>
	<div class="flex justify-around mt-8">
		<div class="inline-flex">
			<button
				on:click={() => updateProject(false)}
				class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
			>
				Prev
			</button>
			<span class="bg-gray-300 text-gray-800 font-bold py-2 px-4">{i + 1}/{pLength}</span>
			<button
				on:click={() => updateProject(true)}
				class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
			>
				Next
			</button>
		</div>
	</div>
{/if}
