<style lang="scss">
  section.album-page {
    background-color: #d3f9dd;
    min-width: 100vw;
    height: calc(100vh - 50px); // workaround? height - header
    scroll-snap-align: start;
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

  .card {
    display: block;
    // flex-direction: column;
    width: calc(50% - 10px);
    height: auto;

    img {
      width: 100%;
    }

    .description {
      display: flex;
      flex-direction: row;
      // height: 3em;
    }

    p {
      // background: blue;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 1em;
      // line-height: 0.7em;
      padding: 5px;
      flex: 1;
    }
  }

  // .card.inactive {
  // }
</style>

<section class="album-page">
  <header>
    <img src="images/cards/green.png" alt="Figurinhas Verdes" />
    <h1>As Donas da Bola</h1>
  </header>

  <div class="cards-wrapper">
    <div class="card">
      <img class="picture" src="tempimages/48.png" alt="figurinha" />
      <div class="description">
        <p>
          Juliana Cabral posa para foto após a conquista da medalha de prata dos
          Jogos Olímpicos de Atenas, em 2004.
        </p>
        <!-- button? -->
        <button>
          <img src="images/icons/icon_saiba_mais.png" alt="Saiba mais" />
        </button>
      </div>
    </div>

    <div class="card inactive" />
  </div>
</section>
