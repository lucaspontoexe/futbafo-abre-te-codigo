import { useEffect, useState } from "react";
import dataset from "./dataset.json";
import "./App.css";
import hand from './images/hand.png';

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
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')) || []);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])

  return (
    <div className="App">
      
      <div className="wrapper">

        <img src={hand} alt="Mão"/>
      </div>

      <button onClick={() => setCards([...cards, ...pickCards(dataset)])}>
        se clicar aqui, algumas [tipo, três] vão pra essa lista aqui
      </button>


      <h2>cartas escolhidas:</h2>
      <ul>
        {cards.map((card) => (
          <li key={card.nome}>{card.nome}: {card.titulo}</li>
        ))}
      </ul>


    </div>
  );
}

export default App;
