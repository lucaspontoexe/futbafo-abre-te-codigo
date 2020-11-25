<script lang="ts">
  import { fade } from "svelte/transition";

  export let data: AppNotification = { type: "info", message: "" };
</script>

<style lang="scss">
  .notification {
    position: fixed;
    bottom: 0px;
    width: 100vw;
    background-color: crimson;
    color: white;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>

{#if data.message !== ''}
  <div class="notification" transition:fade={{ duration: 500 }}>
    <p>{data.message}</p>
  </div>
{/if}
