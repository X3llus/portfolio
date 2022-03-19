<script>
	import { fly } from 'svelte/transition';
	import Card from './card.svelte';
	export let projects;

	let i = 0;

	$: project = projects[i];
	$: pLength = projects.length;

	let to;
	let from;
	let transitioning;
	let cardHeight;

	function updateProject(inc) {
		if (inc) return increment();
		return decrement();
	}

	function increment() {
		if (transitioning) return;
		to = -1000;
		from = 1000;
		console.log(to, from);
		transitioning = true;
		setTimeout(() => {
			transitioning = false
		}, 1000);
		setTimeout(() => {
			if (i < pLength - 1) return i++;
			return (i = 0);
		}, 100);
	}

	function decrement() {
		if (transitioning) return;
		to = 1000;
		from = -1000;
		console.log(to, from);
		transitioning = true;
		setTimeout(() => {
			transitioning = false
		}, 1000);
		setTimeout(() => {
			if (i > 0) return i--;
			return (i = pLength - 1);
		}, 100);
	}
</script>

{#if project != null}
	<div class="w-full overflow-x-hidden p-4" style="height: calc({cardHeight}px + 32px);">
		{#each projects as prj}
			<div class="flex justify-around relative">
				{#if prj == project}
					<div in:fly|local={{ x: from, duration: 1000, delay: 200 }} out:fly|local={{ x: to, duration: 1000}} class="absolute">
						<Card {...prj} bind:clientHeight={cardHeight} />
					</div>
				{/if}
			</div>
		{/each}
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
