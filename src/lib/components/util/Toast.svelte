<script>
  export let message, type
</script>
<div class="toast toast-start">
  <div class="alert alert-{type} animate-fade">
    <div>
      <span>{message}</span>
    </div>
  </div>
  <!-- {#if type === 'success'}
    <div class="alert alert-success">
      <div>
        <span>{message}</span>
      </div>
    </div>
    {:else}
    <div class="alert alert-info">
      <div>
        <span>{message}</span>
      </div>
    </div>
  {/if} -->
</div>
