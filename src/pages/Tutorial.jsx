import "./Tutorial.scss";
import NavBar from 'components/NavBar';

export default function Tutorial() {
  return (
    <>
      <NavBar />
      <section id="tutorial">
        <h1>Como Jogar?</h1>

        <p>
          O jogo do bafo é uma brincadeira muito comum entre os colecionadores
          de figurinhas. Esse nome vem do deslocamento de ar (vulgarmente,
          chamado de bafo) provocado pelo impacto da mão no momento da batida
          (ou palmada) sobre uma área plana em que se encontram as figurinhas
          empilhados um em cima do outro.
        </p>

        <p>
          O objetivo do jogo é ganhar figurinhas de um determinado álbum de
          cromos. As figurinhas que virarem do avesso são recolhidas pelo
          participante que acabou de bater.
        </p>

        <p className="source">
          Fonte: Wikipédia. <br/> Disponível em:
          <a href="https://pt.wikipedia.org/wiki/Jogo_do_bafo">
            https://pt.wikipedia.org/wiki/Jogo_do_bafo
          </a>
        </p>
      </section>
    </>
  );
}
