<style>
  ul,
  li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 700px;
  }

  .card {
    box-sizing: border-box;
    width: 160px;
    height: 90px;
    border: 6px solid green;
    background-image: url("/images/cards/blue.png");
    background-size: 160px;
    background-position: center;
    position: relative;
  }

  .card:after {
    /*  ainda tem que fazer isso ser condicional. talvez como um div de verdade  */
    content: "";
    background-image: url("/images/icons/sinal_check.png");
    background-size: contain;
    background-position: right bottom;

    position: absolute;
    width: 40px;
    height: 40px;

    /*  0px; -20px pra sair da borda. */
    bottom: 0px;
    right: 0px;

    z-index: 2;
  }
</style>

<ul class="card-container" aria-label="teste">
  <li class="card" aria-label="card de um cavalo" aria-checked="true" />
  <div class="card"><input type="checkbox" aria-label="alo teste" /></div>
  <div class="card" />
  <div class="card" />
  <!--  will it wrap  -->
  <div class="card" />
  <div class="card" />
  <div class="card" />
  <div class="card" />
</ul>
