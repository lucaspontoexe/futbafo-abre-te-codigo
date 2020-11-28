<script lang="ts">
  import findCardByID from "utils/findCardByID";
  import { fade } from "svelte/transition";
  import type { Card } from "types/Card";

  export let cardID = "48";
  export let small = false;
  let showInfo = false;
  const cardInfo: Card = findCardByID(cardID);
</script>

<style lang="scss">
  .card {
    position: relative;
    display: block;
    // flex-direction: column;
    width: var(--card-width); // experimentar larguras diferentes;
    // max-width: 350px;
    height: auto;

    .img-holder {
      background: rgba($color: black, $alpha: 0.3);
      position: relative;
    }

    img {
      width: 100%;
    }

    .info {
      position: absolute;
      box-sizing: border-box;
      padding: 10%;
      top: 0px;
      width: 100%;
      height: 100%;

      word-break: break-all;
      color: white;
      background-color: rgba($color: black, $alpha: 0.4);

      h2 {
        font-family: MuseoModerno, sans-serif;
        font-weight: bold;
        font-size: var(--info-text-size);
        word-break: normal;
      }

      p {
        font-size: var(--info-text-size);
      }

      a {
        color: white;
      }
    }

    .description {
      display: flex;
      align-items: center;
      flex-direction: row;
      min-height: 3em;
      background: white;
      padding: 10px;
    }

    p {
      // background: blue;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: var(--text-size);
      line-height: 1.2em;
      flex: 9;
    }

    button {
      height: 100%;
      flex: 1;
      border: 0;
      background: rgba(0, 0, 0, 0);
    }
  }
</style>

<div
  class="card"
  style="
  --card-width: {small ? 'calc(50% - 10px)' : '100%'}; 
  --text-size: {small ? '3vw' : '3.6vw'};
  --info-text-size: {small ? '2vw' : '3.6vw'};
  ">
  <div class="img-holder" on:click={() => (showInfo = !showInfo)}>
    <img class="picture" src={`cards_images
/${cardID}.png`} alt="figurinha" />

    {#if showInfo}
      <div class="info" transition:fade={{ duration: 500 }}>
        <h2>Saiba mais sobre essa figurinha!</h2>

        <p>Local: {cardInfo.local}</p>
        <p>Ano: {cardInfo.data}</p>
        <p>Fotógrafo: {cardInfo.fotografo}</p>
        <p>Fonte: {cardInfo.fonte}</p>
        <p>Tipo de licença: {cardInfo.licenca_tipo}</p>
        <p>Link: <a href={cardInfo.link}> {cardInfo.link} </a></p>
      </div>
    {/if}
  </div>

  <div class="description">
    <p>{cardInfo.legenda}</p>
    <!-- button? -->
    <button>
      <img
        src="images/icons/icon_saiba_mais.png"
        alt="Saiba mais"
        on:click={() => (showInfo = !showInfo)} />
    </button>
  </div>
</div>
