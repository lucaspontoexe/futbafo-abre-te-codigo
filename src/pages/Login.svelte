<script lang="ts">
  import { onMount } from "svelte";
  import { link, push } from "svelte-spa-router";
  import { nickname, userCards } from "../store";
  import metadados from "../metadados.json";
  import api from "services/api";
  import Notification from "components/Notification.svelte";
  import findCardByID from "utils/findCardByID";

  let data = {
    email: "",
    senha: "",
  };

  let loginError = "";

  let form: HTMLFormElement;
  async function submit() {
    try {
      const loginResponse = await api.post("/login.php", { ...data });
      const cardsResponse = await api.get("/get_cards.php");
      const loginData: LoginResponseData = loginResponse.data;
      const cardsData: CardsResponseData = cardsResponse.data;

      // if not sucess == true, give a warning

      nickname.set(loginData.nick);
      userCards.set(cardsData.cards.map(findCardByID));
      console.log(loginData);

      push("/profile");
    } catch (error) {
      console.dir(error.response.data as LoginResponseData | CardsResponseData);
      loginError =
        error.response.data.error || error.message || JSON.stringify(error);
      setTimeout(() => (loginError = ""), 3000);
    }
  }

  onMount(() => {
    console.log(document.cookie);
  });
</script>

<style lang="scss">
  @import "../utils/common.scss";

  #login {
    color: $mainTextColor;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 50px;

    .logo-container {
      text-align: center;
      width: 50%;
      img.bafo {
        width: 100%;
      }
      img.museu {
        width: 50%;
      }
    }

    h1 {
      font-family: $titleFont;
      font-weight: bold;
      margin: 1em 0px;
    }

    p {
      font-family: $bodyFont;
    }

    form {
      box-sizing: border-box;
      padding: 0px 20px;
      width: 100%;
      position: relative;
    }

    .inputs {
      text-align: center;
    }

    input {
      padding: 1em;
      border-radius: 6px;
      border: 1px solid $mainTextColor;
      background-color: #f3f2f2;
      color: gray;
      margin: 10px 0px;
      width: 80%;
    }

    a {
      font-family: $bodyFont;
      color: inherit;
      font-size: 0.8em;
      text-align: center;
    }
  }
</style>

<!-- svelte-ignore a11y-invalid-attribute -->
<section id="login">
  <div class="logo-container">
    <img class="bafo" src="images/logos/LOGO.png" alt="Logo do Futebafo" />
    <img
      class="museu"
      src="images/logos/museu_futebol.png"
      alt="Logo do Museu do Futebol" />
  </div>

  <h1>Curte figurinhas? Venha bater bafo!</h1>
  <p>Faça o login, jogue e complete seu álbum.</p>

  <form
    action="#"
    method="post"
    bind:this={form}
    on:submit|preventDefault={submit}>
    <div class="inputs">
      <input
        type="email"
        name="email"
        placeholder="Digite seu e-mail"
        bind:value={data.email} />

      <input
        type="password"
        name="senha"
        placeholder="Digite sua senha"
        bind:value={data.senha} />
      <a href="#">Ainda não tem cadastro? Clique aqui e faça já o seu!</a>
    </div>
    <br />
    <button type="submit">bora</button>
  </form>
</section>

<Notification data={{ type: 'error', message: loginError }} />
