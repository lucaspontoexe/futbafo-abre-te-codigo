<script lang="ts">
  import CardList from "components/CardList.svelte";
  import api from "services/api";
  import { userCards } from "store";
  import type { Card } from "types/Card";
  import metadados from "../metadados.json";

  const foto = "images/cards/green.png";
  const bluecard = "/images/cards/blue.png";
  const maxDistance = 90;

  let doFlip = false;

  type gameStates = "SELECTING" | "INGAME" | "POST_GAME";
  let gameState: gameStates = "SELECTING";

  let cardsToPlay: string[] = [];

  async function makeRequest() {
    const response = await api.post("/hit.php", { aposta: cardsToPlay });

    console.log(response.data);
    //response.data.new_cards
    // esperar pelo bafo? melhor, né?

    // typescript parece meio estranho às vezes
    const { data: newCardsData }: { data: CardsResponseData } = await api.get(
      "/get_cards.php"
    );
    userCards.set(
      newCardsData.cards.map((cardName: string) =>
        metadados.find((i) => i.nome === cardName)
      )
    );
    gameState = "INGAME";
  }

  function processCardStyle(flipped: boolean, isCardTaken: boolean) {
    const randomposition = () => (Math.random() - 0.5) * maxDistance * 2;
    const randomrotation = () => (Math.random() - 0.5) * 360;

    return `
    position: absolute;
    left: calc(50% - ${130 / 2 + (Math.random() - 0.5) * 20}px);
    top: calc(50% - ${120 / 2 + (Math.random() - 0.5) * 20}px);
    width: 130px;
    height: 120px;
    background-image: ${isCardTaken ? `url(${foto})` : `url(${bluecard})`};
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    transition: all 1s cubic-bezier(.15,.84,.84,1);
    transform: ${
      flipped
        ? `translate(${randomposition()}px,${randomposition()}px) rotate(${randomrotation()}deg);`
        : ""
    }
    z-index: ${isCardTaken ? 1 : 0};
  `;
  }

  function flipCards() {
    navigator.vibrate(50);
    doFlip = true;
  }

  let loadedCards: Array<Card> = [];

  // FALLBACK
  if ($userCards.length === 0)
    loadedCards = JSON.parse(sessionStorage.getItem("cards"));
  else loadedCards = $userCards;

  $: console.log("selected:", cardsToPlay);
</script>

<style lang="scss">
  .game-wrapper {
    color: #60358f;
    position: relative;
    text-align: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    h1 {
      font-family: MuseoModerno;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 57px;
      margin: 0.4em auto;
    }
  }

  .game {
    width: 100%;
    height: 50vh;
  }
</style>

<section id="game">
  {#if gameState === 'SELECTING'}
    <header>
      <h1>Bafo!</h1>
      <p>Escolha no mínimo 3 figurinhas para o monte.</p>
      <hr />
    </header>
    <CardList
      selectable
      bind:cards={loadedCards}
      bind:selectedCards={cardsToPlay} />

    <button
      on:click={makeRequest}
      disabled={cardsToPlay?.length < 3}>Começar!</button>
  {/if}

  {#if gameState === 'INGAME'}
    <div class="game-wrapper">
      <h1>Comece a jogar!</h1>
      <p>Bata no monte e tente virar as figurinhas</p>
      <div class="game">
        <div class="card" style={processCardStyle(doFlip, true)} />
        <div class="card" style={processCardStyle(doFlip, false)} />
        <div class="card" style={processCardStyle(doFlip, false)} />
        <div class="card" style={processCardStyle(doFlip, false)} />
      </div>

      <button on:click={flipCards}> Jogar </button>
    </div>
  {/if}

  {#if gameState === 'POST_GAME'}
    <div class="postgame">parabéns</div>
  {/if}
</section>
