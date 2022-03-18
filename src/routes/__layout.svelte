<script>
	import '../tailwind.css';
	import { page } from '$app/stores';
	import { clickOutside } from '$lib/clickOutside.js';
	import { fly } from 'svelte/transition';
	export let showList = false;
	let miniNav = false;

	const inputList = {
		BUTTON: 'button',
		OUTSIDE: 'outside',
		FRESH: 'fresh'
	};
	let lastInput = inputList.FRESH;
	let showContact = false;

	function scroller(event) {
		console.log('top');
		const top = getOffset(event.target).top;
		if (top <= 0) return (miniNav = true);
		miniNav = false;
	}

	function getOffset(el) {
		var _x = 0;
		var _y = 0;
		while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
			_x += el.offsetLeft - el.scrollLeft;
			_y += el.offsetTop - el.scrollTop;
			el = el.offsetParent;
		}
		return { top: _y, left: _x };
	}

	function openClose() {
		if (lastInput == inputList.FRESH) {
			showContact = true;
		} else if (lastInput == inputList.OUTSIDE && showList == false) {
			lastInput = inputList.BUTTON;
		} else {
			showContact = true;
		}
		lastInput = inputList.BUTTON;
	}

	function handleClickOutside(event) {
		if (lastInput == inputList.BUTTON && showContact) {
			showContact = false;
			lastInput = inputList.OUTSIDE;
			setTimeout(() => (lastInput = inputList.FRESH), 10);
		}
	}
</script>

<div class="flex flex-col h-screen">
	<nav class="bg-gray-700 shadow-lg transition-all duration-300 sticky top-0" class:py-4={!miniNav}>
		<div class="md:mx-32 mx-8">
			<div class="flex justify-between">
				<div class="md:hidden flex items-center">
					<button class="outline-none mobile-menu-button" on:click={(showList = !showList)}>
						<svg
							class="w-6 h-6 text-white"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
				<a href="/" class="flex">
					<img src="/portfolio logo plain.svg" alt="logo with the letter 'BC'" class="h-12 m-2" />
					<div>
						<h1 class="font-semibold text-white text-lg mt-1">Braden Coates</h1>
						<h2 class="text-white">Full Stack and App Developer</h2>
					</div>
				</a>
				<div
					class="hidden md:flex items-center space-x-1"
					class:pt-0={miniNav}
					class:pt-6={!miniNav}
				>
					<a
						href="/"
						class="py-4 px-2 text-white font-semibold text-lg hover:text-gray-300 transition duration-300"
						class:border-b-4={$page.url.pathname == '/'}>Home</a
					>
					<a
						href="about"
						class="py-4 px-2 text-white font-semibold text-lg hover:text-gray-300 transition duration-300"
						class:border-b-4={$page.url.pathname == '/about'}>About Me</a
					>
					<a
						href="projects"
						class="py-4 px-2 text-white font-semibold text-lg hover:text-gray-300 transition duration-300"
						class:border-b-4={$page.url.pathname == '/projects'}>Projects</a
					>
					<div>
						<button
							class="py-4 px-2 text-white font-semibold text-lg hover:text-gray-300 transition duration-300"
							on:click={openClose}>Contact</button
						>
						{#if showContact}
							<div
								class="translate-y-10 ml-2 absolute bg-gray-200 border rounded border-gray-900 shadow-lg px-2 text-white"
								in:fly={{ y: -50, duration: 500 }}
								out:fly={{ y: -50, duration: 500 }}
								use:clickOutside
								on:click_outside={handleClickOutside}
							>
								<ul class="space-y-2 py-2">
									<li class="w-8 flex justify-around">
										<a href="mailto:braden@bradencoates.ca">
											<img src="email_black_24dp.svg" alt="Email" height="24px" />
										</a>
									</li>
									<li class="w-8 flex justify-around">
										<a href="https://www.linkedin.com/in/braden-coates-3291b1196/" target="_blank">
											<img src="LI-In-Bug.png" alt="LinkedIn" height="24px" class="h-6" />
										</a>
									</li>
									<li class="w-8 flex justify-around">
										<a href="https://github.com/X3llus" target="_blank">
											<img src="GitHub-Mark-32px.png" alt="GitHub" height="24px" class="h-6" />
										</a>
									</li>
									<li class="w-8 flex justify-around">
										<a href="https://twitter.com/Braden_C_" target="_blank">
											<img src="Logo black.svg" alt="Twitter" height="24px" class="h-6" />
										</a>
									</li>
								</ul>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
		<div class="{showList ? '' : 'hidden'} md:hidden mobile-menu transition duration-300">
			<ul class="">
				<li class="active">
					<a
						href="/"
						class="block text-sm px-2 py-4 text-white hover:text-yellow-400 transition duration-300"
						>Home</a
					>
				</li>
				<li>
					<a
						href="projects"
						class="block text-sm px-2 py-4 text-white hover:text-yellow-400 transition duration-300"
						>Projects</a
					>
				</li>
			</ul>
		</div>
	</nav>
	<div class="flex-1 overflow-y-auto" on:scroll={scroller}>
		<slot />
	</div>
</div>
