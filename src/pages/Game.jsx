import Header from "components/Header";

function CardsDisplay(params) {
  // usado pra mostrar as cartas que ganhou

  <div className="cards-display">
    <div className="img-wrapper">
      <img src="" alt="" />

      <p>Jogadora Marta com a Medalha de Prata em Atenas</p>
    </div>

    {/* botões prev/next */}
  </div>;
}

export default function Game(params) {
  return (
    <>
      {/* TODO: navbar em vez de header? */}
      <Header />

      <h1>Comece a jogar!</h1>
      <p>Bata no monte e tente virar as figurinhas</p>

      <div className="game">
        {/* 

        deck will have some [how many user has chosen] random cards from cpu [dataset] +
        user-chosen ones
        

        cards will have fixed width in pixels
        position them at the middle of screen using JS to get the offset [screen middle - card 1/2 width and height],
        varying a little bit using random()

        on tap, navigator.vibrate()
        
        flip some cards [maybe css 3d transform?]

        make position and rotation go random using transform

        */}
      </div>
    </>
  );
}
