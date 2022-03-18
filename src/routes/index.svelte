<script>
	import { onMount } from 'svelte';
	import Carousel from '$lib/carousel.svelte';

	onMount(async () => {
		try {
			const resp = await fetch('/projects/star');
			const respProjects = await resp.json();
			console.log(respProjects.projects);
			projects = respProjects.projects;
		} catch (error) {
			console.error(error);
		}
	});

	let projects = [];
</script>

<div class="md:px-32 px-8">
	<div class="pb-8">
		<div class="flex justify-around">
			<h1 class="text-6xl mt-8 font-semibold">Welcome To My Website</h1>
		</div>
		<div class="flex justify-around">
			<p class="text-2xl mt-8 w-1/3 break-words text-center">
				My name is Braden and I am a third year computer science student, I have experience in
				full stack developement and app developement.
			</p>
		</div>
	</div>
	<div class="pb-8">
		<div class="flex justify-around">
			<h1 class="text-4xl mt-8 font-semibold">Highlighted Projects</h1>
		</div>

		{#if projects.length > 0}
			<Carousel {projects} />
		{/if}
	</div>
	<div>
		<div class="flex justify-around">
			<h2 class="text-4xl mt-8 font-semibold">Skills</h2>
		</div>
		<div class="flex justify-around">
			<ul class="grid grid-cols-2 gap-x-10 gap-y-4">
				<li class="text-xl text-center">Flutter</li>
				<li class="text-xl text-center">Svelte</li>
				<li class="text-xl text-center">SvelteKit</li>
				<li class="text-xl text-center">Tailwind CSS</li>
				<li class="text-xl text-center">Nodejs</li>
				<li class="text-xl text-center">Firebase</li>
				<li class="text-xl text-center">MongoDB</li>
			</ul>
		</div>
	</div>
</div>

<style>
	li {
		margin-left: 0;
	}
</style>
