<script>
  export let rating
  let stars = Array(5)
  export let link = true
  console.log(rating)
</script>

<div class="rating">
  {#each stars as star, i}
    <input type="radio" disabled={true} name="rating-{i}" class="mask mask-star-2 bg-orange-400" checked={ i + 1 === rating ? 'checked' : null } />
  {/each}
  {#if link}
    <a href='/' class="link link-primary ml-4 my-auto">Reviews&nbsp;>></a>
  {/if}
</div>
