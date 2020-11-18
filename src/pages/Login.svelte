<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";
  import { link, push } from "svelte-spa-router";
  import { nickname, userCards } from "../store";

  let data = {
    email: "",
    senha: "",
  };

  let form: HTMLFormElement;
  async function submit() {
    const loginData = await fetch(
      "http://localhost:8000/includes/login_json.php",
      {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify(data),
      }
    ).then((r) => r.json());

    const cardsresponse = await axios.post(
      "http://localhost:8000/game/get_user_cards.php",
      null,
      { withCredentials: true }
    );
    const cardsData = cardsresponse.data;

    // if not sucess == true, give a warning

    $nickname = loginData.nick;
    // $userCards = cardsData;

    console.log(cardsData);

    push("/profile");
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
