<script lang="ts">
  import { colorNames } from "utils/colorNames";

  import type { Card } from "../types/Card";
  interface SelectableCard extends Card {
    selected: boolean;
  }

  export let cards: Array<Card> = [];

  console.log('now the cards are: ', cards);
  let selectableCards: Array<SelectableCard> = cards.map((i) => ({
    ...i,
    selected: false,
  }));
  // for testing:
  // import { pickCards } from "../utils/pickCard";
  // import metadados from "../metadados.json";
  // let cards: Array<SelectableCard> = pickCards(metadados, 5).map((i) => ({
  //   ...i,
  // //  _id: shortid.generate(),
  //   selected: false,
  // }));

  const colors = ["green", "yellow", "red", "blue"];
  export let selectable = false;
  export let selectedCards: Array<string> = [];

  $: {
    // por algum motivo isso parece rodar duas vezes, mas e agora
    selectedCards = selectableCards.filter((card) => card.selected).map((c) => c.nome);
    // console.log("[debug] chosen cards: ", selectedCards);
  }
</script>

<style lang="scss">
  .card-container {
    position: relative;
    margin: 0px auto;
    width: calc(100% - 20px);
    display: flex;
    flex-direction: row;
    flex: 1;
    gap: 4px; // 2px?
  }

  .card-list {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 6px;

    img {
      width: 100%;
      font-size: 6px;
      line-height: 1.3em;
    }
  }

  .card {
    box-sizing: border-box;
    padding: 4px;
    min-height: 90px;
    object-fit: cover;
    background-size: 160px;
    background-position: center;
    position: relative;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    transition: border 100ms;

    &.selected {
      border: 4px solid lighten($color: green, $amount: 0.4);
    }

    img {
      height: 100%;
      object-fit: cover;
    }

    // input {
    //   position: absolute;
    //   right: 0px;
    //   bottom: 0px;
    // }
  }

  .card .check {
    background-image: url("/images/icons/sinal_check.png");
    background-size: contain;
    background-position: right bottom;

    position: absolute;
    width: 20px;
    height: 20px;

    /*  0px; -20px pra sair da borda. */
    bottom: 0px;
    right: 0px;

    z-index: 2;
  }
</style>

<div class="card-container">
  {#each colors as color}
    <div class="card-list" aria-label="teste">
      <img src={`images/cards/${color}.png`} alt={colorNames[color]} />

      <!-- TEM jeitos melhores de fazer isso? Com certeza. -->
      {#if selectable}
        <!-- filter: código pras fileiras (selecionáveis) -->
        {#each selectableCards.filter((c) => c.color === color) as card}
          <!-- com ARIA e tudo o que tem direito -->
          <div
            class={card.selected ? 'card selected' : 'card'}
            role="switch"
            aria-checked={card.selected}
            on:click={() => (card.selected = !card.selected)}>
            <!-- <input type="checkbox" bind:checked={card.selected}> -->

            {#if card.selected}
              <div class="check" />
            {/if}

            <img src="cards_images
/thumbs/{card.nome}.jpg" alt={card.legenda} />
          </div>
        {/each}
      {:else}
        <!-- caso a seleção esteja desligada, só mostrar as figurinhas -->
        {#each cards.filter((c) => c.color === color) as card}
          <div class="card">
            <img src="cards_images
/thumbs/{card.nome}.jpg" alt={card.legenda} />
          </div>
        {/each}
      {/if}
    </div>
  {/each}
</div>
