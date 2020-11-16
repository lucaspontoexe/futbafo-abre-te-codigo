import dataset from "./dataset.json";
import { pickCards } from "pickCards";

// https://transform.tools/json-to-jsdoc

/** 
 * @typedef {Object} Card
 * @property {String} creditos
 * @property {String} data
 * @property {String} dimensoes_foto
 * @property {String} dimensoes_objeto
 * @property {String} fonte
 * @property {String} formato
 * @property {String} fotografo
 * @property {String} horizontal_res
 * @property {String} legenda
 * @property {String} link
 * @property {String} local
 * @property {String} nome
 * @property {String} notas
 * @property {String} tipo
 * @property {String} tipo_arquivo
 * @property {String} tipo_licenca
 * @property {String} titulo
 * @property {String} vertical_res
 */

/**
 * @param {array} cards
 * @returns {Card}
 */
export function saveCards(cards) {
  localStorage.setItem("cards", JSON.stringify(cards));
}
/**
 * @returns {Array<Card>}
 */
export function loadCards() {
  if (localStorage.getItem("cards") === null) {
    const newCards = pickCards(dataset, 4);
    saveCards(newCards);
    return newCards;
  }
  return JSON.parse(localStorage.getItem("cards"));
}
