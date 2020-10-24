/**
 * Pick some cards from the deck
 * @param {array} deck
 */
export function pickCards(deck, quantity = 3) {
  let temp = [];
  for (let index = 0; index < quantity; index++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    temp.push(deck[randomIndex]);
  }
  return temp;
}
