<script lang="ts">
  let cards = [{ nome: "tem nome", selected: false }];
</script>

<section id="profile">
  <header>
    <h1>Perfil</h1>
    <p>Jogador,</p>
    <p>
      <strong>Você tem </strong>
      <span>{cards.length}</span> <strong>figurinhas</strong>
    </p>
  </header>
  <hr />

  <!-- {/* <CardList /> */} -->
  <ul>
    {#each cards as card}
      <div className="card">
        <li>{card.nome}</li>
        <input type="checkbox" name={card.nome} checked={card.selected} />
      </div>
    {/each}
  </ul>
</section>
