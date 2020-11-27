<script lang="ts">
  import CardList from "../components/CardList.svelte";
  import { push, replace } from "svelte-spa-router";
  import { nickname, userCards } from "../store";
  import type { Card } from "types/Card";
  import { onMount, tick } from "svelte";
  import api from "services/api";
  import BonusCardPopup from "components/BonusCardPopup.svelte";

  let cards: Card[] = $userCards;

  function bafo() {
    push("/game");
  }

  // só pra garantir:
  onMount(async () => {
    await tick();
    cards = JSON.parse(sessionStorage.getItem("cards")) || $userCards;
    console.log(cards, $userCards);
  });

  async function logOut() {
    try {
      await api.post("/logout.php");
      sessionStorage.clear();
      replace("/");
    } catch (error) {
      console.log(error);
    }
  }
</script>

<style lang="scss">
  @import "../components/Button.scss";

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

  <div class="button-wrapper"><button on:click={bafo}>Jogar</button></div>

  <BonusCardPopup />

  <CardList {cards} />

  <div class="button-wrapper">
    <button
      on:click={logOut}
      style="background-color: #ECF4D4; color: #A3C54B;">Logout</button>
  </div>
</section>
