import NavBar from "components/NavBar";
import { useState } from "react";
import bluecard from 'images/cards/blue.png';

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

const cardWidth = 60;
const maxDistance = 90;

export default function Game(params) {
  //ia ser interessante mudar esse nome hein
  const [flipcard, setflip] =  useState(false);
  const [revealed, setRevealed] = useState(false);
  
  return (
    <>
      <NavBar />

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

        <div className="card" style={processCardStyle(flipcard)} style={{}}></div>
        <div className="card" style={processCardStyle(flipcard)}></div>
        <div className="card" style={processCardStyle(flipcard)}></div>
        <div className="card" style={processCardStyle(flipcard)}></div>
      </div>

      <button onClick={() => setflip(true)}>ala</button>
    </>
  );
}

/**
 * get card style for flipping
 * @param {boolean} flipped 
 * @returns {import("react").CSSProperties}
 */
function processCardStyle(flipped) {
  const randomposition = () => (Math.random() - 0.5) * maxDistance * 2;
  const randomrotation = () => (Math.random() - 0.5) * 360;

  return {
    position: "absolute",
    left: window.innerWidth / 2 - 130 / 2 + (Math.random() - 0.5) * 20,
    top: window.innerHeight / 2 - 120 / 2 + (Math.random() - 0.5) * 20,
    width: 130,
    height: 120,
    backgroundImage: `url(${bluecard})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    borderRadius: 5,
    // border: "1px solid black",
    transition: "all 1s cubic-bezier(.15,.84,.84,1)",  // suggestion radians
    transform: flipped ? `translate(${randomposition()}px,${randomposition()}px) rotate(${randomrotation()}deg)` : '',
  };
}
