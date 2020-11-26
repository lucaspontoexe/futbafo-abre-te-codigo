import metadados from 'metadados.json';

export default (cardName: string) => metadados.find((i) => i.nome === cardName);