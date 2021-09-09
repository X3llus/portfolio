<script>
	export let title;
	export let lang;
	export let desc;
	export let _id;

	$: languages = lang.join(', ');
</script>

<div class="w-2/4 rounded overflow-hidden shadow-lg p-8">
	<div class="grid grid-cols-2">
		<div>
			<h1 class="text-2xl">{title}</h1>
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
