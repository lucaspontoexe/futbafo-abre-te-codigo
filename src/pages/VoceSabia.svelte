<script lang="ts">
    //compatibilidade com o JSX
    const logo = "";
    const socials="";
    const logoMuseu = "";

</script>

<section id="voce-sabia">
    <img
      src={logo}
      className="logo-donas"
      alt="Logo Futebafo Donas da Bola"
    />
    <h1>Você Sabia?</h1>
    <p>
      Por 40 anos (!!!), entre 1940 e 1980, as mulheres foram proibidas de
      jogar bola no Brasil!
    </p>
    <div className="hashtags">
      #futebolfeminino #donasdabola #futebafo #museudofutebol
    </div>

    <p className="source">
      Fonte: Folha de S.P., 2019. Disponível em:{" "}
      <a href="https://www1.folha.uol.com.br/esporte/2019/06/proibido-no-brasil-futebol-feminino-ja-foi-ate-atracao-de-circo.shtml">
        www1.folha.uol.com.br/esporte/2019/06/proibido-no-brasil-futebol-feminino-ja-foi-ate-atracao-de-circo.shtml
      </a>
    </p>

    <div className="logo-redes-sociais">
      <img src={socials} alt="Redes Sociais" />
    </div>

    <p className="bottom-text">
      Essa foi só uma das dificuldades que nossas guerreiras enfrentaram para
      que o futebol feminino brasileiro chegasse aos títulos. Por isso, essa
      edição do jogo é dedicado a elas! Complete seu álbum com as figurinhas
      fotos históricas do acervo de algumas jogadoras que passaram pela nossa
      seleção. Vem com a gente!
    </p>
    <div className="logo-museu-futebol">
      <img src={logoMuseu} alt="Logo do Museu do Futebol" />
    </div>
  </section>