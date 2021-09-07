<script context="module">
  export const load = ({page}) => {

    const myPage = page.params.err;
    return {
      props: {
        myPage
      }
    }
  }
</script>
<script>
  export let myPage;
</script>

<div class="flex justify-around text-5xl mt-8">
  <h1>
    Error 404 - page {myPage} does not exist
  </h1>
</div>
<div class="flex justify-around mt-8">
  <a href="/">
    <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-gray-400 rounded shadow">
      Go Home
    </button>
  </a>
</div>