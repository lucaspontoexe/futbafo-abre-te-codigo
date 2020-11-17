<script lang="ts">
  import type { NewCard } from "../types/Card";

  export const cards: Array<NewCard> = [];
</script>

<style>
  /* ul,
  li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  } */

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

  .card .check {
    /*  ainda tem que fazer isso ser condicional. talvez como um div de verdade  */
    content: "";
    background-image: url("/images/icons/sinal_check.png");
    background-size: contain;
    background-position: right bottom;

    position: absolute;
    width: 40px;
    height: 40px;

    /*  0px; -20px pra sair da borda. */
    bottom: 0px;
    right: 0px;

    z-index: 2;
  }
</style>

<div class="card-container">
  <div class="card-list" aria-label="teste">
    <div class="card"><input type="checkbox" aria-label="alô teste" /></div>

    <div class="card">
      <!-- hidden -->
      <input type="checkbox" id="card_1" />
      <label for="card_1"><div class="check" />
      </label>
    </div>

    <div class="card">
      <input type="checkbox" id="card_2" />
      <label for="card_2"><div class="check" />
      </label>
    </div>
  </div>
</div>
