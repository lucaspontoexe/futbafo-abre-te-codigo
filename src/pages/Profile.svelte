<script lang="ts">
  import { push } from "svelte-spa-router";
  import { nickname, userCards } from "../store";
  import type { NewCard } from "../types/Card";
  // import metadados from "../metadados.json";
  // import { pickCards } from "../utils/pickCard";

  let cards: Array<NewCard> = $userCards;
  // for testing:
  // let cards: Array<NewCard> = pickCards(metadados, 5);

    // TRANSFORMAR ISSO EM MÓDULO?
    // const colors = ["red", "blue", "green", "yellow"];

  // tem jeito melhor de fazer isso.
  // 1. array de cores. foreach duplo. a função filter vai lá pro markup  
  const redCards = cards.filter((c) => c.color === "red");
  const blueCards = cards.filter((c) => c.color === "blue");
  const greenCards = cards.filter((c) => c.color === "green");
  const yellowCards = cards.filter((c) => c.color === "yellow");

  function bafo() {
    // $selectedCards = [
    //   ...$selectedCards,
    //   ...cards.filter((c) => c.selected === true),
    // ];

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
    }
  }

  .card {
    box-sizing: border-box;
    padding: 4px;
    height: 90px;
    object-fit: cover;
    background-size: 160px;
    background-position: center;
    position: relative;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
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
    <p>{$nickname || 'Jogador'},</p>
    <p>
      <strong>Você tem </strong>
      <span>{cards.length}</span>
      <strong>figurinha{cards.length === 1 ? '' : 's'}</strong>
    </p>
  </header>
  <hr />

  <div class="card-container">
    <div class="card-list" aria-label="teste">
      <img src="images/cards/green.png" alt="Cartas Verdes" />
      {#each greenCards as card}
        <img class="card" src="tempimages/{card.nome}.png" alt={card.legenda} />
      {/each}
    </div>

    <div class="card-list" aria-label="teste">
      <img src="images/cards/yellow.png" alt="Cartas Amarelas" />
      {#each yellowCards as card}
        <img class="card" src="tempimages/{card.nome}.png" alt={card.legenda} />
      {/each}
    </div>
    <div class="card-list" aria-label="teste">
      <img src="images/cards/red.png" alt="Cartas Vermelhas" />
      {#each redCards as card}
        <img class="card" src="tempimages/{card.nome}.png" alt={card.legenda} />
      {/each}
    </div>
    <div class="card-list" aria-label="teste">
      <img src="images/cards/blue.png" alt="Cartas Azuis" />
      {#each blueCards as card}
        <img class="card" src="tempimages/{card.nome}.png" alt={card.legenda} />
      {/each}
    </div>
  </div>

  <button on:click={bafo}>Jogar</button>
</section>
