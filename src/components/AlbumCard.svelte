<style lang="scss">
  .card {
    display: block;
    // flex-direction: column;
    width: calc(50% - 10px);
    height: auto;

    .img-holder {
      background: gray;
    }

    img {
      width: 100%;
    }

    .description {
      display: flex;
      flex-direction: row;
      // height: 3em;
      background: white;
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
</style>

<div class="card">
  <div class="img-holder">
    <img class="picture" src="tempimages/48.png" alt="figurinha" />
  </div>

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
