import NavBar from "components/NavBar";
import { useState } from "react";
import bluecard from "images/cards/blue.png";
import yellowcard from "images/cards/yellow.png";
import greencard from "images/cards/green.png";
import redcard from "images/cards/red.png";
import foto from "images/48julianacabral.jpg";
import mockup from "images/group25.png";
import "./Game.scss"

function CardsDisplay(params) {
  // usado pra mostrar as cartas que ganhou

  return (
    <div className="cards-display">
      <div className="img-wrapper" style={{ width: "100vw", backgroundColor: '#60358F' }}>
        <img src={mockup} alt="Acontece." style={{ width: "100%" }} />
      </div>

      {/* botões prev/next */}
    </div>
  );
}

const maxDistance = 90;
const prettymocked = [0, 1, 2, 3];

/**
 * Returns random properties based on array length.
 * e.g if card will reveal and (color?)
 * @param {array} array
 */

function randomStuffFromArray(array) {
  array.map((_item) => ({
    willFlip: Math.random() > 0.5,
    texture: greencard,
  }));
}

const test = prettymocked.map((_item) => ({
  willFlip: Math.random() > 0.5,
  texture: greencard,
}));

export default function Game(params) {
  //ia ser interessante mudar esse nome hein
  const [flipcard, setflip] = useState(false);
  const [revealingCards, setRevealingCards] = useState(false);
  const [displayingCard, setDisplaying] = useState(false);

  return (
    <>
      <NavBar />
      {displayingCard && <CardsDisplay />}
      {!displayingCard && (
        <div className="game-wrapper">
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

            {test.map((item, index) => (
              <div
                key={index}
                className="card"
                style={processCardStyle(
                  flipcard,
                  revealingCards && item.willFlip
                )}
                onClick={() =>
                  revealingCards && item.willFlip && setDisplaying(true)
                }
              ></div>
            ))}
          </div>
          <button
            onClick={() => {
              navigator.vibrate(50);
              setflip(true);
              setRevealingCards(true);
            }}
          >
            Jogar
          </button>
        </div>
      )}
    </>
  );
}

/**
 * get card style for flipping
 * @param {boolean} flipped
 * @param {boolean} revealed
 * @returns {import("react").CSSProperties}
 */
function processCardStyle(flipped, revealed) {
  const randomposition = () => (Math.random() - 0.5) * maxDistance * 2;
  const randomrotation = () => (Math.random() - 0.5) * 360;

  return {
    position: "absolute",
    left: window.innerWidth / 2 - 130 / 2 + (Math.random() - 0.5) * 20,
    top: window.innerHeight / 2 - 120 / 2 + (Math.random() - 0.5) * 20,
    width: 130,
    height: 120,
    backgroundImage: revealed ? `url(${foto})` : `url(${bluecard})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: 5,
    // border: "1px solid black",
    transition: "all 1s cubic-bezier(.15,.84,.84,1)", // suggestion radians
    transform: flipped
      ? `translate(${randomposition()}px,${randomposition()}px) rotate(${randomrotation()}deg)`
      : "",
  };
}
