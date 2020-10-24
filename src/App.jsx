import { useState } from "react";
import dataset from "./dataset.json";
import "./App.css";

/**
 * Pick some cards from the deck
 * @param {array} deck
 */
function pickCards(deck, quantity = 3) {
  let temp = [];
  for (let index = 0; index < quantity; index++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    temp.push(deck[randomIndex]);
  }
  return temp;
}

function App() {
  const [cards, setCards] = useState([]);

  return (
    <div className="App">
      <h1>react bafo</h1>
      <p>calma que hoje à noite a coisa se torna um pouco mais visual</p>

      <p>temos o dataset importado</p>

      <button onClick={() => setCards(pickCards(dataset))}>
        se clicar aqui, algumas [tipo, três] vão pra essa lista aqui
      </button>

      <h2>sample:</h2>
      <pre>{JSON.stringify(dataset[0], null, 4)}</pre>

      <h2>cartas escolhidas:</h2>
      <ul>
        {cards.map((card) => (
          <li>{card.nome}: {card.titulo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
