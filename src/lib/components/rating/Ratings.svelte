<script>
  import Rating from '../location/Rating.svelte'
  export let ratings
</script>

{#each ratings as rating}
  <div class="w-full mx-10 my-4 shadow-xl p-3">
    <div class="flex flex-row justify-end">
      <h6 class="text-3xl">{rating.title}</h6>
      <Rating currRating={rating.rating} link={false} />
    </div>
    <p class="text-xl">{rating.review}</p>
  </div>
{/each}
