<script>
  import { goto } from "$app/navigation";

  import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from "firebase/auth";

  export let title;

  const auth = getAuth();

  function login() {
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passInput").value;
    if (title == "Login") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          localStorage.setItem("uid", user.uid);
          localStorage.setItem("isLoggedIn", true);
          goto("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          goto("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }
</script>

<div class="login flex justify-center pt-10">
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <form on:submit|preventDefault={login}>
        <div class="form-control mb-4">
          <label class="input-group input-group-vertical">
            <span>Email</span>
            <input type="text" placeholder="info@site.com" class="input input-bordered" id='emailInput' />
          </label>
          {#if title != "Login"}
            <div id="emailHelp" class="alert alert-info shadow-lg">
              We'll never share your email with anyone else.
            </div>
          {/if}
        </div>
        <div class="form-control mb-4">
          <label class="input-group input-group-vertical" for="passInput">
            <span>Password</span>
            <input type="password" class="input input-bordered" id='passInput'>
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      {#if title == "Login"}
        <p class="mt-4">
          Not a user? <a href="/signup" class="link link-primary">Sign Up</a>
        </p>
      {/if}
    </div>
  </div>
</div>
