<script lang="ts">
  import CardList from "../components/CardList.svelte";
  import { push } from "svelte-spa-router";
  import { nickname, userCards } from "../store";

  const cards = $userCards;

  function bafo() {
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

  <CardList {cards}/>

  <button on:click={bafo}>Jogar</button>
</section>
