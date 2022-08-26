<script>
  import { currLoc } from '../stores/locStore'
  import { onDestroy, onMount } from 'svelte';
  import { db } from '../fb'
  import { doc, getDoc, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore'
  import Rating from '$lib/components/location/Rating.svelte'
  import RatingForm from '$lib/components/rating/ratingForm.svelte'
  import { rating } from '../stores/locStore'
  import Toast from '$lib/components/util/Toast.svelte'
  import { goto } from '$app/navigation'
  import Ratings from '$lib/components/rating/Ratings.svelte';

  let location = undefined
  let toastMsg = false

  $: if(!$currLoc) goto('/')

  const unsub = onSnapshot(doc(db, 'locations', $currLoc), (doc) => {
    location = doc.data()
    console.dir(location)
  });

  onMount(async () => {
    // await getLocation()
  })

  onDestroy(unsub)

  const getLocation = async () => {
    if(!$currLoc) return
    const docRef = doc(db, 'locations', $currLoc)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()) {
      location = docSnap.data()
    } else {
      console.error('ERROR loading location')
    }
  }

  const submitReview = async () => {
    const locRef = doc(db, 'locations', $currLoc)
    await updateDoc(locRef, {
      ratings: arrayUnion({...$rating})
    }).then((result) => {
      $rating = {}
      document.getElementById('my-modal-6').checked = false
      console.log('update successful, result:')
      console.log(result)
      toastMsg = true
      setTimeout(() => {
        toastMsg = false
      }, 5000)
    }).catch((error) => {
      console.error(error)
    })
  }
</script>

{#if !location}
  <h1>Loading</h1>
  <progress class="progress w-4/5"></progress>
{:else}
  <div class="card card-compact w-96 bg-base-100 shadow-xl m-4">
    <figure><img src="https://placeimg.com/400/225/arch" alt="location pic" /></figure>
    <div class="card-body">
      <h2 class="card-title">{location.name}</h2>
      <Rating rating={location.rating} />
      <p>
        {location.address}<br>{location.city},&nbsp;{location.state}&nbsp;{location.zip}
      </p>
      <div class="card-actions justify-end">
        <label for="my-modal-6" class="btn btn-primary modal-button">Review</label>
      </div>
    </div>
  </div>
  <div class="flex flex-col w-full border-opacity-50">
    <div class="divider">Ratings</div>
    {#if location.ratings?.length > 0}
      <Ratings ratings={[...location.ratings]} />
    {/if}
  </div>
{/if}

<RatingForm submitFn={submitReview} />

{#if toastMsg}
  <Toast type={'success'} message={'Review successfully submited'} />
{/if}
