<script context="module">
  export const load = ({page}) => {

    const _id = page.params._id;
    return {
      props: {
        _id
      }
    }
  }
</script>
<script>
  export let _id;


</script>
<p>
  {_id}
</p>