import { useEffect, useState } from "react";
import dataset from "./dataset.json";
import "./App.css";
import hand from "./images/hand.png";
import rectangle from "./images/rectangle9.svg";
import { pickCards } from "./pickCards";

function App() {
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    // todo: outras rotas
    // tipo a de escolher cartas pra apostar
    <div className="App">
      <div className="wrapper">
        <div className="cards-holder">
          <img src={rectangle} alt="Carta" />
          <img src={rectangle} alt="Carta" />
        </div>

        <img src={hand} alt="Mão" />
      </div>

      <button onClick={() => setCards([...cards, ...pickCards(dataset)])}>
        se clicar aqui, algumas [tipo, três] vão pra essa lista aqui
      </button>

      <h2>cartas escolhidas:</h2>
      <ul>
        {cards.map((card) => (
          <li key={card.nome}>
            {card.nome}: {card.titulo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
