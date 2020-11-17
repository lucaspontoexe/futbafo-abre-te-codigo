<script lang="ts">
  import { push } from "svelte-spa-router";

  // import CardList from "../components/CardList.svelte";
  import metadados from "../metadados.json";
  import { selectedCards } from "../store";
  import type { NewCard } from "../types/Card";
  import { pickCards } from "../utils/pickCard";

  interface SelectableCard extends NewCard {
    selected: boolean;
  }

  let cards: Array<SelectableCard> = pickCards(metadados, 4).map((c) => ({
    ...c,
    selected: false,
  }));

  function bafo() {
    $selectedCards = [
      ...$selectedCards,
      ...cards.filter((c) => c.selected === true),
    ];

    push("/game");
  }
</script>

<style lang="scss">
  section#profile {
    //class praquele header?
    text-align: center;
    color: #60358f;
    position: relative;

    h1 {
      font-family: MuseoModerno;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 57px;
      margin: 0.4em auto;
    }

    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
    }

    strong {
      font-family: MuseoModerno;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 22px;
      color: #a3c54b;
    }

    hr {
      width: calc(100% - 20px);
    }
  }

  .card-list {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .card {
    box-sizing: border-box;
    width: 160px;
    height: 90px;
    border: 6px solid green;
    background-image: url("/images/cards/blue.png");
    background-size: 160px;
    background-position: center;
    position: relative;
  }

  // .card .check {
  //   /*  ainda tem que fazer isso ser condicional. talvez como um div de verdade  */
  //   content: "";
  //   background-image: url("/images/icons/sinal_check.png");
  //   background-size: contain;
  //   background-position: right bottom;

  //   position: absolute;
  //   width: 40px;
  //   height: 40px;

  //   /*  0px; -20px pra sair da borda. */
  //   bottom: 0px;
  //   right: 0px;

  //   z-index: 2;
  // }
</style>

<section id="profile">
  <header>
    <h1>Perfil</h1>
    <p>Jogador,</p>
    <p>
      <strong>Você tem </strong>
      <span>{cards.length}</span>
      <strong>figurinhas</strong>
    </p>
  </header>
  <hr />

  <!-- <CardList {cards} /> -->
  <!-- <ul>
    {#each cards as card}
      <div class="card">
        <li>{card.nome}</li>
        <input type="checkbox" name={card.nome} bind:checked={card.selected} />
      </div>
    {/each}
  </ul> -->

  <div class="card-container">
    <div class="card-list" aria-label="teste">
      {#each cards as card}
        <div
          class="card"
          style={`background-image: url(tempimages/${card.nome}.png);`}>
          <!-- <input type="checkbox" id="card_1" /> -->
          <!-- <label for="card_1"><div class="check" /> -->
          <!-- </label> -->
        </div>
      {/each}
    </div>
  </div>

  <button on:click={bafo}>Jogar</button>
</section>
