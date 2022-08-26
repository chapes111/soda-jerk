<script>
  export let currRating
  let stars = Array(5)
  export let link = true
</script>

<div class="rating">
  {#each stars as star, i}
    <input type="radio" disabled={true} name="rating-1" class="mask mask-star-2 bg-orange-400" checked={ i === currRating ? 'checked' : null } />
  {/each}
  {#if link}
    <a href='/' class="link link-primary ml-4 my-auto">Reviews >></a>
  {/if}
</div>
