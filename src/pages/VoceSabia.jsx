import logo from 'images/LOGO_com_Donas_da_Bola_Roxo.png';
import './VoceSabia.scss';

export default function VocêSabia(params) {
  // tá com cara de componente isso
  return (
    <section id="voce-sabia">
      <img src={logo} alt="Logo Futebafo Donas da Bola"/>
      <h1>Você Sabia?</h1>
      <p>
        Por 40 anos (!!!), entre 1940 e 1980, as mulheres foram proibidas de
        jogar bola no Brasil!
      </p>  
      <div className="hashtags">
        #futebolfeminino #donasdabola #futebafo #museudofutebol
      </div>
      <div className="logos"></div>
      <p className="bottom-text">
        Essa foi só uma das dificuldades que nossas guerreiras enfrentaram para
        que o futebol feminino brasileiro chegasse aos títulos. Por isso, essa
        edição do jogo é dedicado a elas! Complete seu álbum com as figurinhas
        fotos históricas do acervo de algumas jogadoras que passaram pela nossa
        seleção. Vem com a gente!
      </p>
      <div className="museu-futebol-logo"></div>
    </section>
  );
}
