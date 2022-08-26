<script>
  import { db } from './fb'
  import Navbar from "$lib/components/layout/navbar.svelte"
  import { isLoggedIn, userStore } from "./stores/authStore"
  import '$lib/global.css'

  import { onMount } from "svelte";

  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { goto } from "$app/navigation"

  onMount(() => {
    const auth = getAuth()
    if(!$isLoggedIn) goto('/login')
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Welcome to SodaJerk")
        userStore.update(() => user)
        isLoggedIn.update(() => true)
      } else {
        userStore.update(() => undefined)
        isLoggedIn.update(() => false)
        goto("/login")
      }
    })
  })
</script>

<Navbar />
<slot />
