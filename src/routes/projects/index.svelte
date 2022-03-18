<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	onMount(async () => {
		const resp = await fetch('/projects/api?options={starred: true}');
		const projects = await resp.json();
		console.log(projects);
	});
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<main>
	<div
		class="flex justify-around pt-8"
		in:fade={{ duration: 250, delay: 300 }}
		out:fade={{ duration: 250 }}
	>
		<h1 class="text-5xl">WIP</h1>
	</div>
</main>
