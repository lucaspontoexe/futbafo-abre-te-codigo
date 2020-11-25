<script lang="ts">
  import { onMount } from "svelte";
  import { link, push } from "svelte-spa-router";
  import { nickname, userCards } from "../store";
  import metadados from "../metadados.json";
  import api from "services/api";

  let data = {
    email: "",
    senha: "",
  };
  // `

  let form: HTMLFormElement;
  async function submit() {
    try {
      const loginResponse = await api.post("/login.php", { ...data });
      const cardsResponse = await api.get("/get_cards.php");
      const loginData: LoginResponseData = loginResponse.data;
      const cardsData: CardsResponseData = cardsResponse.data;

      // if not sucess == true, give a warning

      nickname.set(loginData.nick);
      userCards.set(
        metadados.filter((item) => cardsData.cards.includes(item.nome))
      );
      console.log(loginData);

      push("/profile");
    } catch (error) {
      console.dir(error.response.data);
    }
  }

  onMount(() => {
    console.log(document.cookie);
  });
</script>

<a href="/profile" use:link>entre. entre imediatamente.</a>

<form
  action="#"
  method="post"
  bind:this={form}
  on:submit|preventDefault={submit}>
  <input
    type="email"
    name="email"
    placeholder="email"
    bind:value={data.email} />

  <input
    type="password"
    name="senha"
    placeholder="pass"
    bind:value={data.senha} />
  <button type="submit">bora</button>
</form>
