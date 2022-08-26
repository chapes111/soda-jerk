<script>
  import { rating } from '../../../routes/stores/locStore'

  export let submitFn

  const test = () => {
    console.log($rating)
  }
</script>

<!-- The button to open modal -->
<!-- <label for="my-modal-6" class="btn modal-button">open modal</label> -->

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <div class="mx-4 mb-8">
      <form>
        <h3 class="text-3xl mb-4">Rate Location</h3>
        <label for="name" class="label">
          <span class="label-text">Name</span>
        </label>
        <input name="name" type="text" bind:value={$rating.name} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
        <label for="title" class="label">
          <span class="label-text">Title</span>
        </label>
        <input name="title" type="text" bind:value={$rating.title} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
        <div class="form-control">
          <label for="review" class="label">
            <span class="label-text">Your review</span>
          </label>
          <textarea name="review" bind:value={$rating.review} class="textarea textarea-primary h-24" placeholder="Tell us about your experience"></textarea>
        </div>
        <h6 class="label">Rating</h6>
        <div class="rating">
          <input on:click={() => $rating.rating = 1} type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
          <input on:click={() => $rating.rating = 2} type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input on:click={() => $rating.rating = 3} type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input on:click={() => $rating.rating = 4} type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          <input on:click={() => $rating.rating = 5} type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
        </div>
      </form>
    </div>
    <div class="text-center">
      <button on:click|preventDefault={submitFn} class="btn btn-primary w-4/5">Submit</button>
    </div>
    <div class="modal-action">
      <label for="my-modal-6" class="btn">Cancel</label>
    </div>
  </div>
</div>
