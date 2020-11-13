<script lang="ts">
  //compatibilidade com o JSX
  const logo = "";
  const socials = "";
  const logoMuseu = "";
</script>

<style lang="scss">
  section#voce-sabia {
    width: 100%;
    padding: 0px 10%;
    box-sizing: border-box;
    text-align: center;
    background-color: #60358f;
    color: white;
    padding-top: 35px;
    padding-bottom: 35px;

    img.logo-donas {
      max-width: 240px;
    }

    h1 {
      font-family: MuseoModerno;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 57px;

      margin-top: 0px;
      margin-bottom: 0.4em;
    }

    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;
    }

    .source {
      font-size: 12px;
    }

    .hashtags {
      font-family: Roboto;
      font-weight: 300;
    }

    .logo-redes-sociais img {
      max-width: 240px;
      cursor: pointer;
    }

    .bottom-text {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;

      margin-top: 20px;
    }

    .logo-museu-futebol {
      padding: 0px;
      height: 50px;
      img {
        height: 100%;
      }
    }
  }
</style>

<section id="voce-sabia">
  <img src={logo} class="logo-donas" alt="Logo Futebafo Donas da Bola" />
  <h1>Você Sabia?</h1>
  <p>
    Por 40 anos (!!!), entre 1940 e 1980, as mulheres foram proibidas de jogar
    bola no Brasil!
  </p>
  <div class="hashtags">
    #futebolfeminino #donasdabola #futebafo #museudofutebol
  </div>

  <p class="source">
    Fonte: Folha de S.P., 2019. Disponível em:{' '}
    <a
      href="https://www1.folha.uol.com.br/esporte/2019/06/proibido-no-brasil-futebol-feminino-ja-foi-ate-atracao-de-circo.shtml">
      www1.folha.uol.com.br/esporte/2019/06/proibido-no-brasil-futebol-feminino-ja-foi-ate-atracao-de-circo.shtml
    </a>
  </p>

  <div class="logo-redes-sociais">
    <img src={socials} alt="Redes Sociais" />
  </div>

  <p class="bottom-text">
    Essa foi só uma das dificuldades que nossas guerreiras enfrentaram para que
    o futebol feminino brasileiro chegasse aos títulos. Por isso, essa edição do
    jogo é dedicado a elas! Complete seu álbum com as figurinhas fotos
    históricas do acervo de algumas jogadoras que passaram pela nossa seleção.
    Vem com a gente!
  </p>
  <div class="logo-museu-futebol">
    <img src={logoMuseu} alt="Logo do Museu do Futebol" />
  </div>
</section>
