<script lang="ts">
import CardList from "../components/CardList.svelte";

  let cards = [{ nome: "tem nome", selected: false }];
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
      width: 90%;
    }
  }
</style>

<section id="profile">
  <header>
    <h1>Perfil</h1>
    <p>Jogador,</p>
    <p>
      <strong>Você tem </strong>
      <span>{cards.length}</span>
      <strong>figurinhas</strong>
    </p>
  </header>
  <hr />

  <CardList/>
  <ul>
    {#each cards as card}
      <div class="card">
        <li>{card.nome}</li>
        <input type="checkbox" name={card.nome} checked={card.selected} />
      </div>
    {/each}
  </ul>
</section>
