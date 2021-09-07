<script>
    import { onMount } from 'svelte';

    onMount(async () => {
        const resp = await fetch('/projects/api');
        const projects = await resp.json();
        console.log(projects);
    });
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<div class="flex justify-around pt-8">
    <h1 class="text-5xl">
        WIP
    </h1>
</div>