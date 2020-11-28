<script lang="ts">
  import AlbumCard from "./AlbumCard.svelte";

  export let title = "As Donas da Bola";
  export let color = "green";
  import { colorNames } from "../utils/colorNames";
  import { userCards } from "../store";
  import type { Card } from "types/Card";

  const colorData = {
    // text / background
    green: ["#457351", "#d3f9dd"],
    blue: ["#6A80BE", "#EAEFFC"],
    yellow: ["#FBBD02", "#FFFACE"],
    red: ["#A32C2A", "#F5DFDF"],
  };

  const usercards = JSON.parse(sessionStorage.getItem("cards")) || $userCards;
  const cards: Card[] = usercards.filter((c: Card) => c.color === color);
</script>

<style lang="scss">
  section.album-page {
    min-width: 100vw;
    min-height: calc(100vh - 50px); // workaround? height - header
    scroll-snap-align: start;
    padding-bottom: 20px;
    box-sizing: border-box;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8em; //2em?
    width: 100%;

    img {
      height: 60%;
    }

    h1 {
      font-family: MuseoModerno;
      font-style: normal;
      font-weight: bold;
      font-size: 2em; // 1.5em?
    }
  }

  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
    padding: 0px 10px;
  }
</style>

<section class="album-page" style={`background-color: ${colorData[color][1]}`}>
  <header>
    <img src={`images/cards/${color}.png`} alt={colorNames[color]} />
    <h1 style={`color: ${colorData[color][0]}`}>{title}</h1>
  </header>

  <div class="cards-wrapper">
    <!-- for each card of color -->

    {#each cards as card}
      <AlbumCard cardID={card.nome} small />
    {/each}
  </div>
</section>
