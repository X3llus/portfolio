<script>
	import { onMount } from 'svelte';
	import Carousel from '../project-carousel/carousel.svelte';

	onMount(async () => {
		try {
			const resp = await fetch('/projects/api');
			const respProjects = await resp.json();
			console.log(respProjects.projects);
			projects = respProjects.projects;
		} catch (error) {
			console.error(error);
		}
	});

	let projects = [];
</script>

<div class="divide-y divide-purple-800 md:px-32 px-8">
	<div class="pb-8">
		<div class="flex justify-around">
			<h1 class="text-5xl mt-8">Welcome To My Website</h1>
		</div>

		{#if projects.length > 0}
			<Carousel {projects} />
		{/if}
	</div>

	<div class="pb-8">
		<div class="flex justify-around">
			<h1 class="text-3xl mt-8">What I'm Up To</h1>
		</div>
		<div class="flex justify-around">
			<p>
				I am a student in the <a
					class="text-purple-700 hover:underline"
					href="https://www.lakeheadgeorgian.ca/programs/computer-science/"
					target="_blank">Lakehead Georgian Computer Science</a
				> program. I am currently in my third year and have completed two coops both at OTP Design-Works
				creating cloud solutions in Zoho.
			</p>
		</div>
	</div>

	<div class="about-me">
		<div class="flex justify-around">
			<h1 class="text-3xl mt-8">About Me</h1>
		</div>
		<p>
			I first discovered my love of programming through video games in the 8th grade when I got a
			book a beginner c++ book that taught the reader to make basic console games, I eventually got
			into using GameMaker Studio and make a couple games, albeit not very good games.
		</p>

		<p>
			When I started highschool I also took an engineering course in my first year where I learned
			some visual basic, and how much I dislike it, and the basics of robotics using Vex IQ. I was
			also taught the importance of problem solving and how to go about it efficiently, which is
			probably one of the most useful things I've learned while in highschool. After School I
			started to attend meetings for the robotics team at my school, although I limited myself to
			really only being a helper and learning the basics of the team and the creative process.
		</p>

		<p>
			In my second year I started taking computer science classes, where I learned more Visual Basic
			even more in depth than before. I also took the next course in engineering where I learned
			more in depth robotics with Vex IQ and started interfacing with the computer using Visual
			Basic and the printer port. I was still apart of the robotics team after school doing more
			general tasks and learning what I could.
		</p>

		<p>
			Third year is when I really started exploring what I wanted to do for a career and decided on
			computer science over engineering due to my love of programming. I also started taking more
			responsibilities on the robotics team and started to do volunteering with the team for things
			like teaching kids a bit about vex and being a scorekeeper for Vex IQ. I also started learning
			python in my computer science class and some different development methods like agile and
			waterfall.
		</p>

		<p>
			My fourth year was more of the previous,except I also entered into my first hackathon, <a
				class="text-purple-700 hover:underline"
				href="https://deltahacks5.devpost.com/"
				target="_blank"
			>
				DeltaHacks V</a
			>, where I met up with three complete strangers to try to solve a real world issue in 24
			hours. Sadly we didn't win the prize for the problem but we were able to secure best internet
			of things device at the hackathon. During my fourth year of highschool I was accepted into the
			Lakehead Georgian Computer Science program during the second year of it running and accepted
			it because it would give me both the practicality of going to college and the theory of going
			to university plus two co-op terms to learn how to program in a professional environment
			before I graduate.
		</p>

		<p>
			In my first year of highschool I met so many people who have the same passion for programming
			that I do which pushed me to want to pursue my own personal projects more than before and also
			attend <a
				class="text-purple-700 hover:underline"
				href="https://deltahacks6.devpost.com/"
				target="_blank"
			>
				DeltaHacks VI</a
			>, my second hackathon. But this time I went with just one of my friends, we went in with no
			knowledge of how to develope an app but in the end we were able to learn and develope a
			challenge winning app in just 24 hours.
		</p>
	</div>
</div>

<style>
	.about-me p {
		margin-bottom: 0.75rem;
	}
</style>
