<script lang="ts">
  import { fade } from "svelte/transition";

  export let data: AppNotification = { type: "info", message: "" };
</script>

<style lang="scss">
  .notification {
    position: fixed;
    bottom: 0px;
    width: 100vw;
    background-color: rgba($color: crimson, $alpha: 0.8);
    color: white;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 3;
  }
</style>

{#if data.message !== ''}
  <div class="notification" transition:fade={{ duration: 500 }}>
    <p>{data.message}</p>
  </div>
{/if}
