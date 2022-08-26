<script>
  import { onMount } from 'svelte';
  import algoliasearch from 'algoliasearch/lite';
  import { currLoc } from '../../../routes/stores/locStore'

  let searchClient;
  let index;

  let query = '';
  let hits = [];

  $: console.log('currLoc changed', $currLoc)


  onMount(() => {
    searchClient = algoliasearch(
      'S80AIFZQE9', // app id
      '97e70aee30236d8fe6c3e24390cdf122' // search only key
    );

    index = searchClient.initIndex('locations_dev');

    // Warm up search
    index.search({ query }).then(console.log)
  });

  // Fires on each keyup in form
  async function search() {
    console.log(query)
    const result = await index.search(query);
    hits = result.hits;
    console.log(hits)
  }

  // todo: get full data from firestore?
  const getLocInfo = async () => {
    console.log('get info')
  }

  </script>

  <style>
    :global(em) {
      color: red;
      font-weight: bold;
      background: black;
    }
  </style>


  <h3>SodaJerk Insta-Search</h3>

  <form on:submit|preventDefault={getLocInfo}>
    <div class="form-control">
      <div class="input-group">
        <input type="text" bind:value={query} on:keyup={search} placeholder="search…" class="input input-bordered" />
        <button on:submit|preventDefault={getLocInfo} class="btn btn-square">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewbox="0 0 24 24" stroke="currentcolor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
    </div>
  </form>

  {#each hits as hit}
    <section>
      <a
        on:click|once|capture={() => {
            currLoc.set(hit.objectID)
          }
        }
        href={'/location'}
        contenteditable bind:innerHTML={hit._highlightResult.name.value}>
          {hit.name} - {hit.city}, {hit.zip}</a>
      <!-- <p>{hit.bio}</p> -->

      <!-- <p contenteditable bind:innerHTML={hit._highlightResult.bio.value}></p> -->
    </section>
  {/each}
