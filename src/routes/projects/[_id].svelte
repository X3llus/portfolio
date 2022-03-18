<script context="module">
	export const load = ({ params }) => {
		const _id = params._id;
		return {
			props: {
				_id
			}
		};
	};
</script>

<script>
	export let _id;

	import { onMount } from 'svelte';

	onMount(async () => {
		const resp = await fetch(`/projects/id?_id=${_id}`);
		const projects = (await resp.json()).project;
		console.log(projects);
	});
</script>

<p>WIP</p>
