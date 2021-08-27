<script>
    import Card from './card.svelte';
    export let projects;

    $: i = 0;

    $: project = projects[i];
</script>

<!-- {#each projects as { name, job }}
    <h1 class="text-2xl">Name: {name}</h1>
    <h2 class="text-xl">Job: {job}</h2>
{/each} -->

<Card name={project.name} job={project.job} />

<input type="number" bind:value={i} min=0 max={projects.length} />