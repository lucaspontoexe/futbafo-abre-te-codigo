<script lang="ts">
  import { onMount } from "svelte";
  import { link, push } from "svelte-spa-router";
  import { nickname, userCards } from "../store";
  import metadados from "../metadados.json";

  let data = {
    email: "",
    senha: "",
  };
  // `

  let form: HTMLFormElement;
  async function submit() {
    const loginData = await fetch("http://localhost:8010/proxy/api/login.php", {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify(data),
    }).then((r) => r.json());

    const cardsData = await fetch(
      "http://localhost:8010/proxy/api/get_cards.php",
      {
        credentials: "include",
        mode: "cors",
      }
    ).then((r) => r.json());

    // if not sucess == true, give a warning

    $nickname = loginData.nick;
    $userCards = metadados.filter((item) => cardsData.cards.includes(item.nome));

    console.log(loginData);
    console.log($userCards);

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
