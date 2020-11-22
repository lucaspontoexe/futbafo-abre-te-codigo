<script lang="ts">
  export let cardID = "48";
  import metadados from '../metadados.json';
</script>

<style lang="scss">
  .card {
    display: block;
    // flex-direction: column;
    width: calc(50% - 10px); // experimentar larguras diferentes;
    max-width: 350px;
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
      font-size: 0.7em;
      // line-height: 0.7em;
      padding: 5px;
      flex: 1;
    }
  }
</style>

<div class="card">
  <div class="img-holder">
    <img class="picture" src={`tempimages/${cardID}.png`} alt="figurinha" />
  </div>

  <div class="description">
    <p>
      {metadados.find(c => c.nome === cardID).legenda}
    </p>
    <!-- button? -->
    <button>
      <img src="images/icons/icon_saiba_mais.png" alt="Saiba mais" />
    </button>
  </div>
</div>
