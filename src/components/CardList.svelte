<script lang="ts">
  import { colorNames } from "utils/colorNames";

  import { userCards } from "../store";
  import type { NewCard } from "../types/Card";
  let cards: Array<NewCard> = $userCards;
  // for testing:
  // let cards: Array<NewCard> = pickCards(metadados, 5);

  // TRANSFORMAR ISSO EM MÓDULO?
  const colors = [ "green", "yellow","red", "blue"];
</script>

<div class="card-container">

  {#each colors as color}

    <div class="card-list" aria-label="teste">
      <img src={`images/cards/${color}.png`} alt={colorNames[color]} />

      <!-- filter -->
      {#each cards.filter((c) => c.color === color) as card}
        <img class="card" src="tempimages/{card.nome}.png" alt={card.legenda} />
      {/each}

    </div>
  {/each}
</div>

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