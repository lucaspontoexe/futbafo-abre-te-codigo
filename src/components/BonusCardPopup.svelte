<script lang="ts">
  import AlbumCard from "./AlbumCard.svelte";
  import { fade } from "svelte/transition";
  import { bonusCard } from "store";
  import { onMount, tick } from "svelte";

  let cardID = "";
  let shouldDisplay = false;

  const dismiss = (event: Event) => {
    if ((event.target as HTMLElement).id === "dismiss") {
      shouldDisplay = false;
      $bonusCard = "";
    }
  };

  onMount(async () => {
    cardID = String($bonusCard || '');
    await tick();
    shouldDisplay = true;
  });
</script>

<style lang="scss">
  @import "../utils/common.scss";

  .popup-wrapper {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: rgba($color: black, $alpha: 0.4);
    display: flex;

    align-items: center;
    justify-content: center;
    z-index: 4;
  }

  #bonus-card {
    width: 80%;
    border: 1px solid lighten($color: green, $amount: 10);
    border-radius: 10px;
    background-color: white;
    padding: 5%;
  }

  h1 {
    color: $mainTextColor;
    font-family: $titleFont;
    font-weight: bold;
    font-size: 1.5em;
    margin-bottom: 0.2em;
  }
</style>

{#if cardID !== '' && shouldDisplay}
  <div
    class="popup-wrapper"
    transition:fade={{ duration: 250 }}
    id="dismiss"
    on:click={dismiss}>
    <article id="bonus-card">
      <h1>Você ganhou uma figurinha!</h1>
      <AlbumCard {cardID} />
    </article>
  </div>
{/if}
