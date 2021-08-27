<script>
    import Carousel from '../project-carousel/carousel.svelte';
</script>

<div class="flex justify-around">
    <h1 class="text-5xl mt-8">
        Welcome To My Website
    </h1>
</div>

<Carousel projects={[{"name": "braden", "job": "programmer"},{"name": "kyle", "job": "best buy"}]}/>