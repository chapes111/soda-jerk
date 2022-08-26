<script>
  import { goto } from '$app/navigation'
  import { getAuth, signOut } from 'firebase/auth'
  import { isLoggedIn } from '../../../routes/stores/authStore'

  const auth = getAuth()


  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('uid')
        goto('/login')
      })
      .catch((error) => {
        console.error(error)
      })
  }
</script>
<div class="navbar bg-base-100">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl">SodaJerk</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><a href="/">Item 1</a></li>
      <li tabindex="0">
        <a href="/">
          Parent
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-base-100">
          <li><a href="/">Submenu 1</a></li>
          <li><a href="/">Submenu 2</a></li>
        </ul>
      </li>
      {#if $isLoggedIn}
        <li><a class="btn btn-primary text-black" href="/" on:click|preventDefault={logout} >Logout</a></li>
      {/if}

    </ul>
  </div>
</div>
