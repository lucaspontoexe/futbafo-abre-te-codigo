<script lang="ts">
  import vocesabia from "../vocesabia.json";

  //compatibilidade com o JSX
  const logo = "images/logos/logo_roxo.png";
  const socials = "images/icons/icon_socialmedia.png";
  const logoMuseu = "images/logos/museu_futebol_branco.png";

  const curiosidade = vocesabia[Math.floor(Math.random() * vocesabia.length)];

  function findLink(input: string) {
    const split = input.split("https://");
    if (split.length === 2)
      return { hasLink: true, text: split[0], link: 'https://' + split[1] };
      // sem uso por enquanto, mas fica pra não quebrar
    return { hasLink: false, text: split[0] };
  }

  const linkData = findLink(curiosidade.fonte);
</script>

<style lang="scss">
  section.voce-sabia {
    min-width: 100vw;
    min-height: calc(100vh - 50px); // workaround? height - header
    scroll-snap-align: start;
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

      margin-top: 0px;
      margin-bottom: 0.4em;
    }

    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;

      margin: 1em 0px;
    }

    .source {
      font-size: 12px;

      a {
        text-decoration: none;
        color: white;
      }
    }

    .hashtags {
      font-family: Roboto;
      font-weight: 300;
    }

    .logo-redes-sociais img {
      max-width: 240px;
      cursor: pointer;
      margin-bottom: 1em;
    }

    .logo-museu-futebol {
      padding: 0px;
      height: 50px;
      img {
        height: 60%;
      }
    }
  }
</style>

<section class="voce-sabia">
  <img src={logo} class="logo-donas" alt="Logo Futebafo Donas da Bola" />
  <h1>Você Sabia?</h1>
  <p>{curiosidade.texto}</p>
  <div class="hashtags">
    #futebolfeminino #donasdabola #futebafo #museudofutebol
  </div>

  <!-- svelte-ignore a11y-invalid-attribute -->
  <p class="source">
    {#if linkData.hasLink}
      {linkData.text}
      <a href={linkData.link}>{linkData.link}</a>
    {:else}{curiosidade.fonte}{/if}
  </p>

  <div class="logo-redes-sociais">
    <img src={socials} alt="Redes Sociais" />
  </div>

  <!-- <p class="bottom-text">
    Essa foi só uma das dificuldades que nossas guerreiras enfrentaram para que
    o futebol feminino brasileiro chegasse aos títulos. Por isso, essa edição do
    jogo é dedicado a elas! Complete seu álbum com as figurinhas fotos
    históricas do acervo de algumas jogadoras que passaram pela nossa seleção.
    Vem com a gente!
  </p> -->
  <div class="logo-museu-futebol">
    <img src={logoMuseu} alt="Logo do Museu do Futebol" />
  </div>
</section>
