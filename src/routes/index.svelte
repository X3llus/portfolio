<script>
	import { onMount } from 'svelte';
	import Carousel from '$lib/carousel.svelte';
	import SEO from '$lib/SEO.svelte';

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

<SEO
	pageTitle="Braden Coates, Fullstack and App Dev"
	description="Welcome to my website, My name is Braden and I am a third year computer science student, I have experience in full stack and app developement."
/>
<div class="md:px-32 px-8">
	<div class="pb-8">
		<div class="flex justify-around">
			<h1 class="text-6xl mt-8 font-semibold">Welcome To My Website</h1>
		</div>
		<div class="flex justify-around">
			<p class="text-2xl mt-8 md:w-1/3 sm:w-3/4 break-words text-center">
				My name is Braden and I am a third year computer science student, I have experience in full
				stack developement and app developement.
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
	<div class="mb-8">
		<div class="flex justify-around">
			<h2 class="text-4xl my-8 font-semibold">Skills</h2>
		</div>
		<div class="grid md:grid-cols-5 sm:grid-cols-3 divide-x divide-red-50 w-full">
			<div class="bg-gray-300 py-16 px-11 rounded-l-3xl md:col-start-2 sm:col-start-1">
				<div class="py-4 flex justify-around">
					<img src="/web_black_48dp.svg" alt="browser" width="64px" />
				</div>
				<h2 class="text-3xl font-semibold text-center underline mb-4">Front End</h2>
				<ul class="space-y-8">
					<li>
						<h3 class="text-xl text-center pb-3 font-semibold">Languages:</h3>
						<ul class="space-y-2 text-lg text-center">
							<li>HTML and CSS</li>
							<li>JavaScript</li>
							<li>TypeScript</li>
						</ul>
					</li>
					<li>
						<h3 class="text-xl text-center pb-3 font-semibold">Frameworks:</h3>
						<ul class="space-y-2 text-lg text-center">
							<li>Svelte</li>
							<li>SvelteKit</li>
							<li>Angular</li>
						</ul>
					</li>
					<li>
						<h3 class="text-xl text-center pb-3 font-semibold">Tools:</h3>
						<ul class="space-y-2 text-lg text-center">
							<li>TailwindCSS</li>
							<li>Firebase</li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="bg-gray-300 py-16 px-11">
				<div class="py-4 flex justify-around">
					<img src="/dns_black_48dp.svg" alt="browser" width="64px" />
				</div>
				<h2 class="text-3xl font-semibold text-center underline mb-4">Back End</h2>
				<ul class="space-y-8">
					<li>
						<h3 class="text-xl text-center pb-3 font-semibold">Languages:</h3>
						<ul class="space-y-2 text-lg text-center">
							<li>JavaScript</li>
							<li>TypeScript</li>
						</ul>
					</li>
					<li>
						<h3 class="text-xl text-center pb-3 font-semibold">Frameworks:</h3>
						<ul class="space-y-2 text-lg text-center">
							<li>Express</li>
							<li>SvelteKit Endpoints</li>
						</ul>
					</li>
					<li>
						<h3 class="text-xl text-center pb-3 font-semibold">Tools:</h3>
						<ul class="space-y-2 text-lg text-center">
							<li>Node.JS</li>
							<li>Firebase Admin</li>
							<li>MongoDB</li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="bg-gray-300 py-16 px-11 rounded-r">
				<div class="py-4 flex justify-around">
					<img src="/smartphone_black_48dp.svg" alt="browser" width="64px" />
				</div>
				<h2 class="text-3xl font-semibold text-center underline mb-4">Mobile</h2>
				<ul class="space-y-8">
					<li>
						<h3 class="text-xl text-center pb-3 font-semibold">Languages:</h3>
						<ul class="space-y-2 text-lg text-center">
							<li>Dart</li>
							<li>Kotlin</li>
							<li>Java</li>
						</ul>
					</li>
					<li>
						<h3 class="text-xl text-center pb-3 font-semibold">Frameworks:</h3>
						<ul class="space-y-2 text-lg text-center">
							<li>Flutter</li>
						</ul>
					</li>
					<li>
						<h3 class="text-xl text-center pb-3 font-semibold">Tools:</h3>
						<ul class="space-y-2 text-lg text-center">
							<li>Firebase</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	li {
		margin-left: 0;
	}
</style>
