<script lang="ts">
  import CardList from "components/CardList.svelte";
  import Notification from "components/Notification.svelte";
  import api from "services/api";
  import { userCards } from "store";
  import { tick } from "svelte";
  import type { Card } from "types/Card";
  import findCardByID from "utils/findCardByID";
  import { pickCards } from "utils/pickCard";
  import metadados from "../metadados.json";

  const foto = "images/cards/green.png";
  const bluecard = "/images/cards/blue.png";
  const maxDistance = 90;

  let doFlip = false;

  type gameStates = "SELECTING" | "INGAME" | "POST_GAME";
  let gameState: gameStates = "SELECTING";

  interface FlippableCard extends Card {
    flipped: boolean;
  }

  let cardsToPlay: string[] = [];
  let opponentCards: string[] = [];
  let deck: FlippableCard[] = [];

  let gameError = "";

  const makeFlippable = (item: Card, willFlip: boolean) => ({
    ...item,
    flipped: willFlip,
  });

  async function getOpponentCards() {
    const response = await api.get(
      `/generate_opponent_cards.php?quantity=${cardsToPlay.length}`
    );
    opponentCards = response.data.opponent_cards; // TODO: types

    deck = [
      ...opponentCards.map(findCardByID).map((i) => makeFlippable(i, false)),
      ...cardsToPlay.map(findCardByID).map((i) => makeFlippable(i, false)),
    ];

    gameState = "INGAME";
  }

  async function makeRequest() {
    try {
      const response = await api.post("/hit.php", { aposta: cardsToPlay });

      console.log(response.data);
      const { new_cards, non_flipped } = response.data as HitResponseData;
      // transformar deck: cards result; completar com cards aleatórios

      deck = [
        ...non_flipped.map(findCardByID).map((i) => makeFlippable(i, false)),
        ...new_cards.map(findCardByID).map((i) => makeFlippable(i, true)),
      ];

      // typescript parece meio estranho às vezes
      const { data: newCardsData }: { data: CardsResponseData } = await api.get(
        "/get_cards.php"
      );

      userCards.set(
        newCardsData.cards.map((cardName) => findCardByID(cardName))
      );

      await tick();

      // se o store [provavelmente] falhar
      sessionStorage.setItem(
        "cards",
        JSON.stringify(
          newCardsData.cards.map((cardName) => findCardByID(cardName))
        )
      );

      setTimeout(() => {
        gameState = "POST_GAME";
      }, 2000);
    } catch (error) {
      // A gente adora digitar
      console.dir(error.response.data);
      gameError =
        error.response.data.error || error.message || JSON.stringify(error);
      setTimeout(() => (gameError = ""), 3000);
    }
  }

  function processCardStyle(
    flipped: boolean,
    isCardTaken: boolean,
    color: string = "blue",
    background: string = foto
  ) {
    const randomposition = () => (Math.random() - 0.5) * maxDistance * 2;
    const randomrotation = () => (Math.random() - 0.5) * 360;

    return `
    position: absolute;
    left: calc(50% - ${130 / 2 + (Math.random() - 0.5) * 20}px);
    top: calc(50% - ${120 / 2 + (Math.random() - 0.5) * 20}px);
    width: 130px;
    height: 120px;
    background-image: ${
      isCardTaken ? `url(${background})` : `url(/images/cards/${color}.png)`
    };
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    transition: all 1s cubic-bezier(.15,.84,.84,1);
    transform: ${
      flipped /* opcional: checar se o state é POST_GAME */
        ? `translate(${randomposition()}px,${randomposition()}px) rotate(${randomrotation()}deg);`
        : ""
    }
    z-index: ${isCardTaken ? 1 : 0};
  `;
  }

  async function flipCards() {
    navigator.vibrate(50);
    await makeRequest();
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
      on:click={getOpponentCards}
      disabled={cardsToPlay?.length < 3}>Começar!</button>
  {/if}

  {#if gameState === 'INGAME'}
    <div class="game-wrapper">
      <h1>Comece a jogar!</h1>
      <p>Bata no monte e tente virar as figurinhas</p>
      <div class="game">
        {#each deck as card}
          <div
            class="card"
            style={processCardStyle(doFlip, card.flipped, card.color, `tempimages/thumbs/${card.nome}.jpg`)} />
        {/each}
      </div>

      <button on:click={flipCards}> Jogar </button>
    </div>
  {/if}

  {#if gameState === 'POST_GAME'}
    <div class="postgame">parabéns</div>
  {/if}
</section>

<Notification data={{ type: 'error', message: gameError }} />
