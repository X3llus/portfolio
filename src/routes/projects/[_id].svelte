<script context="module">
	export const load = ({ page }) => {
		const _id = page.params._id;
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
		const resp = await fetch(`/projects/api/id?_id=${_id}`);
		const projects = (await resp.json()).project;
		console.log(projects);
	});
</script>

<p>WIP</p>
