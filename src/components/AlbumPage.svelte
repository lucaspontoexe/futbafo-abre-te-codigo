<script lang="ts">
import AlbumCard from "./AlbumCard.svelte";


  export let title = "As Donas da Bola";
  export let color = "green";
  const altImages = {
    green: "Figurinhas Verdes",
    blue: "Figurinhas Azuis",
    yellow: "Figurinhas Amarelas",
    red: "Figurinhas Vermelhas",
  };

  const colorData = {
    // text / background
    green: ["#457351", "#d3f9dd"],
    blue: ["#6A80BE", "#EAEFFC"],
    yellow: ["#FBBD02", "#FFFACE"],
    red: ["#A32C2A", "#F5DFDF"],
  };
</script>

<style lang="scss">
  section.album-page {
    min-width: 100vw;
    min-height: calc(100vh - 50px); // workaround? height - header
    scroll-snap-align: start;
    padding-bottom: 20px;
  }

  header {
    display: flex;
    align-items: center;
    height: 8em; //2em?
    width: 100%;
    // padding: 0px 10%;

    img {
      height: 60%;
    }

    h1 {
      font-family: MuseoModerno;
      font-style: normal;
      font-weight: bold;
      font-size: 2em;
    }
  }

  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0px 10px;
  }

</style>

<section class="album-page" style={`background-color: ${colorData[color][1]}`}>
  <header>
    <img src={`images/cards/${color}.png`} alt={altImages[color]} />
    <h1 style={`color: ${colorData[color][0]}`}>{title}</h1>
  </header>

  <div class="cards-wrapper">
    <!-- for each card of color -->
  
    <AlbumCard/>
    <AlbumCard/>  

  </div>
</section>
