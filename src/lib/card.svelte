<script>
	export let title;
	export let lang;
	export let desc;
	export let starred;
	export let link = '';
	export let _id;

	$: languages = lang.join(', ');
</script>

<div class="rounded overflow-hidden shadow-lg p-8">
	<div class="md:grid md:grid-cols-2">
		<div>
			<h1 class="text-2xl flex">
				{title}
				{#if link}
					<a href={link} class="ml-4"><img src="/GitHub-Mark-32px.png" alt="link to github" /></a>
				{/if}
			</h1>
			<h2 class="text-lg">Languages: {languages}</h2>
		</div>
		<div>
			<p class="text-base">
				{desc}
			</p>
			<a class="text-purple-700 hover:underline" href="/projects/{_id}">More...</a>
		</div>
	</div>
</div>
